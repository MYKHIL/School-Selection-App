import math
import json
import os

# Regional center coordinates in Ghana (Approximate Lat/Lng)
GHANA_REGION_COORDINATES = {
    "Greater Accra": (5.6037, -0.1870),
    "Gt. Accra": (5.6037, -0.1870),
    "Eastern": (6.1000, -0.2667),
    "Central": (5.3000, -1.0000),
    "Western": (5.5000, -2.0000),
    "Western North": (6.3000, -2.8000),
    "Volta": (6.6000, 0.4700),
    "Oti": (7.9000, 0.3000),
    "Ashanti": (6.6885, -1.6244),
    "Bono": (7.3333, -2.3333),
    "Bono East": (7.7500, -1.0500),
    "Ahafo": (7.0000, -2.3333),
    "Northern": (9.4007, -0.8393),
    "Savannah": (9.0000, -1.8000),
    "North East": (10.5000, -0.3700),
    "Upper East": (10.7856, -0.8514),
    "Upper West": (10.3000, -2.5000)
}

TIER_NAMES = [
    "Tier 0: Locality",
    "Tier 1: District",
    "Tier 2: Adjacent Districts",
    "Tier 3: Region",
    "Tier 4: Adjacent Regions",
    "Tier 5: National"
]


def haversine_distance(lat1, lon1, lat2, lon2):
    """
    Calculate the great circle distance between two points 
    on the earth in kilometers using the Haversine formula.
    """
    R = 6371.0  # Earth's radius in kilometers
    
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    
    a = (math.sin(dlat / 2.0) ** 2 +
         math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) *
         math.sin(dlon / 2.0) ** 2)
    c = 2.0 * math.atan2(math.sqrt(a), math.sqrt(1.0 - a))
    
    return R * c


def normalize_str(s):
    if not s:
        return ""
    return str(s).strip().lower()


def get_entity_coordinates(entity):
    """
    Extract or derive (lat, lng) coordinates for a candidate or school.
    If explicit lat/lng are provided, use them.
    Otherwise, derive from region/district + deterministic offset.
    """
    # Check explicit keys
    lat = entity.get("lat") or entity.get("latitude")
    lng = entity.get("lng") or entity.get("longitude") or entity.get("lon")
    
    if lat is not None and lng is not None:
        try:
            return float(lat), float(lng)
        except (ValueError, TypeError):
            pass

    # Check coordinates array [lat, lng]
    coords = entity.get("coordinates")
    if isinstance(coords, (list, tuple)) and len(coords) >= 2:
        try:
            return float(coords[0]), float(coords[1])
        except (ValueError, TypeError):
            pass

    # Derive from region
    region = entity.get("region", "Greater Accra")
    base_lat, base_lng = GHANA_REGION_COORDINATES.get(region, (5.6037, -0.1870))

    # Add deterministic jitter based on school code or name
    identifier = str(entity.get("code") or entity.get("name") or entity.get("locality") or "")
    hash_val = sum(ord(c) for c in identifier)
    lat_offset = ((hash_val % 100) - 50) / 1000.0  # ~ +/- 5km
    lng_offset = (((hash_val * 7) % 100) - 50) / 1000.0

    return base_lat + lat_offset, base_lng + lng_offset


def get_geographic_tier(school, candidate, adjacent_districts_map, adjacent_regions_map):
    """
    Classify school into 6 geographic tiers:
    Tier 0: Locality match (same locality and same district)
    Tier 1: District match (same district)
    Tier 2: Adjacent District match (district in candidate's district neighbors)
    Tier 3: Region match (same region)
    Tier 4: Adjacent Region match (region in candidate's region neighbors)
    Tier 5: National (any other school)
    """
    sch_loc = normalize_str(school.get("location") or school.get("locality"))
    cand_loc = normalize_str(candidate.get("locality"))
    
    sch_dist = normalize_str(school.get("district"))
    cand_dist = normalize_str(candidate.get("district"))

    sch_reg = normalize_str(school.get("region"))
    cand_reg = normalize_str(candidate.get("region"))

    # Check Tier 0: Locality match
    if cand_loc and sch_loc and cand_loc in sch_loc and (sch_dist == cand_dist or not cand_dist):
        return 0

    # Check Tier 1: Same District
    if sch_dist and cand_dist and sch_dist == cand_dist:
        return 1

    # Check Tier 2: Adjacent District
    cand_dist_raw = candidate.get("district", "")
    adj_dists = adjacent_districts_map.get(cand_dist_raw, [])
    norm_adj_dists = [normalize_str(d) for d in adj_dists]
    if sch_dist and sch_dist in norm_adj_dists:
        return 2

    # Check Tier 3: Same Region
    if sch_reg and cand_reg and sch_reg == cand_reg:
        return 3

    # Check Tier 4: Adjacent Region
    cand_reg_raw = candidate.get("region", "")
    adj_regs = adjacent_regions_map.get(cand_reg_raw, [])
    norm_adj_regs = [normalize_str(r) for r in adj_regs]
    if sch_reg and sch_reg in norm_adj_regs:
        return 4

    # Tier 5: National
    return 5


def validate_program_match(school, candidate_program):
    """
    Check if school offers candidate's requested program or suitable track.
    """
    if not candidate_program:
        return True

    cand_p = candidate_program.strip().upper()
    progs = school.get("progs") or school.get("programNames") or school.get("programs") or []
    progs_upper = [str(p).strip().upper() for p in progs]

    if cand_p in progs_upper:
        return True

    # Generic or TVET / STEM fallbacks
    school_type = (school.get("type") or "").upper()
    if cand_p == "TECH" and (school_type == "TVET" or "TECH" in progs_upper):
        return True
    if cand_p == "STEM" and (school_type == "STEM" or school_type == "SHTS" or "STEM" in progs_upper):
        return True
    
    # Standard general programmes fallback
    if cand_p in ["GEN. SCI", "GEN. ARTS"] and "GEN. SCI" in progs_upper:
        return True

    return False


def validate_gender_match(school, candidate_gender):
    """
    Check if school accommodates candidate's gender.
    """
    if not candidate_gender:
        return True

    cand_g = candidate_gender.strip().capitalize()
    sch_g = (school.get("gender") or "Mixed").strip().capitalize()

    if sch_g == "Mixed":
        return True
    if cand_g in ["Male", "Boy", "Boys"] and sch_g in ["Boys", "Male"]:
        return True
    if cand_g in ["Female", "Girl", "Girls"] and sch_g in ["Girls", "Female"]:
        return True

    return False


def validate_cutoff_aggregate(school, candidate_aggregate):
    """
    Check cut-off aggregate condition: candidate.aggregate <= school.cut_off_aggregate.
    Default cut-off aggregate is 54 if not specified.
    """
    if candidate_aggregate is None:
        return True

    try:
        cand_agg = float(candidate_aggregate)
        cutoff = float(school.get("cut_off_aggregate", 54))
        return cand_agg <= cutoff
    except (ValueError, TypeError):
        return True


def validate_capacity(school, capacity_usage_map):
    """
    Check available capacity > 0.
    """
    code = school.get("code")
    used = capacity_usage_map.get(code, 0)
    avail = school.get("available_capacity", 100)
    try:
        avail = float(avail)
    except (ValueError, TypeError):
        avail = 100.0
    
    return (avail - used) > 0


def generate_radial_school_pairings(candidate, school_database, adjacent_districts_map, adjacent_regions_map, system_rules=None):
    """
    Main Radial School Pairing Generator.
    
    Parameters:
      - candidate: dict containing candidate details (lat, lng, locality, district, region, program, gender, aggregate)
      - school_database: list of school dicts
      - adjacent_districts_map: dict mapping district_name -> list of adjacent district names
      - adjacent_regions_map: dict mapping region_name -> list of adjacent region names
      - system_rules: dict containing package configuration rules (or defaults to standard 4 packages)

    Returns:
      - dict or list containing matched 8 schools per package and corresponding metadata logs.
    """
    if system_rules is None:
        system_rules = {}

    # Define standard package quotas if not provided
    default_packages = [
        {"package_id": 1, "name": "Balanced Optimal Strategy", "quotas": {"A": 2, "B": 3, "C": 3}, "allow_only_c": False},
        {"package_id": 2, "name": "Safe Placement Focus", "quotas": {"A": 1, "B": 3, "C": 4}, "allow_only_c": False},
        {"package_id": 3, "name": "High Assurance / Technical", "quotas": {"A": 0, "B": 2, "C": 6}, "allow_only_c": False},
        {"package_id": 4, "name": "Category C Focus", "quotas": {"A": 0, "B": 0, "C": 8}, "allow_only_c": True}
    ]

    packages_config = system_rules.get("packages", default_packages)

    cand_lat, cand_lng = get_entity_coordinates(candidate)
    cand_prog = candidate.get("program") or candidate.get("requested_program")
    cand_gender = candidate.get("gender")
    cand_agg = candidate.get("aggregate")

    # Group schools into 6 Tiers & calculate Haversine distance
    tiered_schools = {0: [], 1: [], 2: [], 3: [], 4: [], 5: []}
    
    for sch in school_database:
        sch_lat, sch_lng = get_entity_coordinates(sch)
        dist = haversine_distance(cand_lat, cand_lng, sch_lat, sch_lng)
        tier = get_geographic_tier(sch, candidate, adjacent_districts_map, adjacent_regions_map)
        
        sch_entry = {
            "school": sch,
            "tier": tier,
            "distance": dist
        }
        tiered_schools[tier].append(sch_entry)

    # Sort each tier ascending by Haversine physical distance
    for tier in range(6):
        tiered_schools[tier].sort(key=lambda x: x["distance"])

    results = []

    for pkg_cfg in packages_config:
        pkg_id = pkg_cfg.get("package_id")
        pkg_name = pkg_cfg.get("name", f"Package {pkg_id}")
        quotas = pkg_cfg.get("quotas", {"A": 2, "B": 3, "C": 3})
        allow_only_c = pkg_cfg.get("allow_only_c", False) or (quotas.get("A", 0) == 0 and quotas.get("B", 0) == 0 and quotas.get("C", 8) == 8)

        selected_schools = []
        metadata_log = []
        selected_codes = set()
        category_counts = {"A": 0, "B": 0, "C": 0}
        capacity_usage = {}

        # 1. Sequential Category Pass: Search Cat A, then Cat B, then Cat C radially from locality outward (Tier 0 to Tier 5)
        categories_to_fill = ["A", "B", "C"]
        for target_cat in categories_to_fill:
            needed_quota = quotas.get(target_cat, 0)
            if needed_quota <= 0 and not (allow_only_c and target_cat == "C"):
                continue

            for tier_idx in range(6):
                if category_counts.get(target_cat, 0) >= needed_quota and not (allow_only_c and target_cat == "C" and len(selected_schools) < 8):
                    break
                if len(selected_schools) >= 8:
                    break

                tier_schools = tiered_schools[tier_idx]

                for entry in tier_schools:
                    if category_counts.get(target_cat, 0) >= needed_quota and not (allow_only_c and target_cat == "C" and len(selected_schools) < 8):
                        break
                    if len(selected_schools) >= 8:
                        break

                    sch = entry["school"]
                    code = sch.get("code")
                    category = (sch.get("category") or "C").upper()

                    if code in selected_codes:
                        continue

                    # Match specific category for this radial sweep
                    if category != target_cat:
                        continue

                    status = (sch.get("status") or "").lower()

                    # Check residence compatibility based on candidate distance position
                    dist = entry["distance"]
                    temp_distances = sorted([s.get("_dist", 0) for s in selected_schools] + [dist])
                    rank_of_this_sch = temp_distances.index(dist)

                    if rank_of_this_sch < 3 and "day" not in status:
                        continue
                    if rank_of_this_sch >= 3 and "boarding" not in status:
                        continue

                    # Validation checks
                    if not validate_program_match(sch, cand_prog):
                        continue
                    if not validate_gender_match(sch, cand_gender):
                        continue
                    if not validate_cutoff_aggregate(sch, cand_agg):
                        continue
                    if not validate_capacity(sch, capacity_usage):
                        continue

                    sch_copy = dict(sch)
                    sch_copy["_dist"] = dist
                    sch_copy["_tier"] = tier_idx

                    # Add passing school
                    selected_schools.append(sch_copy)
                    selected_codes.add(code)
                    category_counts[category] = category_counts.get(category, 0) + 1
                    capacity_usage[code] = capacity_usage.get(code, 0) + 1

                    metadata_log.append({
                        "school_code": code,
                        "school_name": sch.get("name"),
                        "category": category,
                        "tier": tier_idx,
                        "tier_name": TIER_NAMES[tier_idx],
                        "distance_km": round(dist, 2),
                        "residence": "Boarding", # Placeholder until post-process
                        "program": cand_prog,
                        "fallback_used": False
                    })

        # 2. Fallback Rule: If all 6 tiers processed and < 8 schools paired
        if len(selected_schools) < 8:
            all_tiered_flat = []
            for t_idx in range(6):
                all_tiered_flat.extend(tiered_schools[t_idx])
            all_tiered_flat.sort(key=lambda x: x["distance"])

            for entry in all_tiered_flat:
                if len(selected_schools) >= 8:
                    break

                sch = entry["school"]
                code = sch.get("code")
                category = (sch.get("category") or "C").upper()

                if code in selected_codes:
                    continue

                if allow_only_c and category != "C":
                    continue

                status = (sch.get("status") or "").lower()
                dist = entry["distance"]
                temp_distances = sorted([s.get("_dist", 0) for s in selected_schools] + [dist])
                rank_of_this_sch = temp_distances.index(dist)

                if rank_of_this_sch < 3 and "day" not in status:
                    continue
                if rank_of_this_sch >= 3 and "boarding" not in status:
                    continue

                # Validation checks (relaxed category quotas, but strict program, gender, cutoff, capacity)
                if not validate_program_match(sch, cand_prog):
                    continue
                if not validate_gender_match(sch, cand_gender):
                    continue
                if not validate_cutoff_aggregate(sch, cand_agg):
                    continue
                if not validate_capacity(sch, capacity_usage):
                    continue

                sch_copy = dict(sch)
                sch_copy["_dist"] = dist
                sch_copy["_tier"] = entry["tier"]

                selected_schools.append(sch_copy)
                selected_codes.add(code)
                category_counts[category] = category_counts.get(category, 0) + 1
                capacity_usage[code] = capacity_usage.get(code, 0) + 1

                metadata_log.append({
                    "school_code": code,
                    "school_name": sch.get("name"),
                    "category": category,
                    "tier": entry["tier"],
                    "tier_name": f"{TIER_NAMES[entry['tier']]} (Fallback)",
                    "distance_km": round(dist, 2),
                    "residence": "Boarding",
                    "program": cand_prog,
                    "fallback_used": True
                })

        # Post-processing:
        # Sort selected schools by distance and assign "Day" to the 3 closest schools and "Boarding" to the remaining 5
        if len(metadata_log) > 0:
            ranked_indices = sorted(range(len(metadata_log)), key=lambda i: metadata_log[i]["distance_km"])
            for rank_pos, idx in enumerate(ranked_indices):
                res = "Day" if rank_pos < 3 else "Boarding"
                metadata_log[idx]["residence"] = res
                selected_schools[idx]["res"] = res

            # 2. Sort choice listings for each package by Category (A -> B -> C), then distance
            cat_priority = {"A": 1, "B": 2, "C": 3}
            paired = list(zip(selected_schools, metadata_log))
            paired.sort(key=lambda pair: (cat_priority.get((pair[0].get("category") or "C").upper(), 3), pair[1]["distance_km"]))

            selected_schools = [p[0] for p in paired]
            metadata_log = [p[1] for p in paired]

        results.append({
            "package_id": pkg_id,
            "package_name": pkg_name,
            "quota_config": quotas,
            "school_count": len(selected_schools),
            "schools": selected_schools,
            "metadata_log": metadata_log
        })

    return results


if __name__ == "__main__":
    import sys
    base_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.dirname(base_dir)

    schools_path = os.path.join(root_dir, "data", "schools_all.json")
    d_adj_path = os.path.join(base_dir, "ghana_district_neighbors.json")
    r_adj_path = os.path.join(base_dir, "ghana_regions_neighbours.json")

    with open(schools_path, "r", encoding="utf-8") as f:
        school_db = json.load(f)

    with open(d_adj_path, "r", encoding="utf-8") as f:
        d_adj = json.load(f)

    with open(r_adj_path, "r", encoding="utf-8") as f:
        r_adj = json.load(f)

    # Check if candidate JSON passed via stdin or command line arg
    candidate_input = None
    if len(sys.argv) > 1:
        try:
            candidate_input = json.loads(sys.argv[1])
        except Exception:
            pass

    if not candidate_input and not sys.stdin.isatty():
        try:
            stdin_data = sys.stdin.read().strip()
            if stdin_data:
                candidate_input = json.loads(stdin_data)
        except Exception:
            pass

    if candidate_input:
        system_rules = candidate_input.get("system_rules") or {}
        candidate_data = candidate_input.get("candidate") or candidate_input
        pairings = generate_radial_school_pairings(
            candidate=candidate_data,
            school_database=school_db,
            adjacent_districts_map=d_adj,
            adjacent_regions_map=r_adj,
            system_rules=system_rules
        )
        print(json.dumps({"success": True, "pairings": pairings}, indent=2))
    else:
        test_candidate = {
            "locality": "Dansoman",
            "district": "Accra Metro",
            "region": "Greater Accra",
            "program": "GEN. SCI",
            "gender": "Mixed",
            "aggregate": 12,
            "lat": 5.5500,
            "lng": -0.2500
        }

        pairings = generate_radial_school_pairings(
            candidate=test_candidate,
            school_database=school_db,
            adjacent_districts_map=d_adj,
            adjacent_regions_map=r_adj
        )

        print(f"Generated {len(pairings)} packages:")
        for pkg in pairings:
            print(f"\nPackage {pkg['package_id']}: {pkg['package_name']} (Total choices: {pkg['school_count']})")
            for idx, item in enumerate(pkg["metadata_log"]):
                print(f"  Choice {idx+1}: {item['school_name']} (Code: {item['school_code']}, Cat: {item['category']}, {item['tier_name']}, {item['distance_km']} km)")
