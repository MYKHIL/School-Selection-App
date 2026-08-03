import json
from collections import Counter, defaultdict
from pathlib import Path

root = Path(__file__).resolve().parent.parent
input_path = root / 'data' / 'schools_all.json'
regions_path = root / 'scripts' / 'regions-districts.json'

with input_path.open('r', encoding='utf-8') as f:
    schools = json.load(f)
with regions_path.open('r', encoding='utf-8') as f:
    region_data = json.load(f)

prefix_regions = {
    '001': 'Greater Accra',
    '002': 'Eastern',
    '003': 'Central',
    '004': 'Western North',
    '005': 'Ashanti',
    '009': 'Upper East',
    '901': 'Greater Accra',
    '902': 'Eastern',
    '903': 'Central',
    '904': 'Western',
    '905': 'Ashanti',
    '906': 'Bono',
    '909': 'Upper East',
}

# School-specific locations verified from the register context or official web
# search results where the PDF row omitted its region.
overrides = {
    '0040706': ('Western North', 'Bibiani Anhwiaso Bekwai Municipal', 'Awaso'),
    '0040600': ('Western North', 'Bibiani Anhwiaso Bekwai Municipal', 'Bibiani'),
    '0040701': ('Western North', 'Bibiani Anhwiaso Bekwai Municipal', 'Bibiani'),
    '0040703': ('Western North', 'Bibiani Anhwiaso Bekwai Municipal', 'Bibiani'),
    '0040704': ('Western North', 'Bibiani Anhwiaso Bekwai Municipal', 'Sefwi Anwhiaso'),
    '0040705': ('Western North', 'Bibiani Anhwiaso Bekwai Municipal', 'Chirano'),
    '0040804': ('Western North', 'Bia West', 'Adjoafua'),
    '0040806': ('Western North', 'Bia East', 'Adabokrom'),
    '0040807': ('Western North', 'Bia West', 'Amoaya'),
    '0040607': ('Western North', 'Sefwi Akontombra', 'Nsawora Edumafa'),
    '0041001': ('Western North', 'Suaman', 'Enchi'),
    '9060301': ('Bono East', 'Kintampo Municipal', 'Kintampo'),
}

changed = 0
for school in schools:
    code = str(school.get('code', '')).strip()
    if code in overrides:
        region, district, locality = overrides[code]
        school['region'] = region
        school['district'] = district
        school['location'] = f'{locality}, {region}'
        changed += 1
        continue

    if str(school.get('region', '')).strip() != 'Unknown':
        continue

    region = prefix_regions.get(code[:3])
    if not region:
        continue

    school['region'] = region
    district = str(school.get('district', '')).strip()
    if not district or district.lower() in {'unknown', 'unknown district'}:
        district = 'District Central'
        school['district'] = district
    school['location'] = f'{district}, {region}'
    changed += 1

by_region = defaultdict(list)
for school in schools:
    by_region[school.get('region', 'Unknown')].append(school)

with input_path.open('w', encoding='utf-8') as f:
    json.dump(schools, f, ensure_ascii=False, indent=2)
with (root / 'data' / 'schools_by_region.json').open('w', encoding='utf-8') as f:
    json.dump(dict(sorted(by_region.items())), f, ensure_ascii=False, indent=2)

summary = {
    'generated_at': '2026-07-31',
    'total_schools': len(schools),
    'regions': dict(sorted(Counter(s.get('region', 'Unknown') for s in schools).items())),
    'school_types': dict(sorted(Counter(s.get('type', 'SHS') for s in schools).items())),
    'unknown_region_count': sum(1 for s in schools if s.get('region') == 'Unknown'),
    'location_repair_count': changed,
}
with (root / 'data' / 'schools_summary.json').open('w', encoding='utf-8') as f:
    json.dump(summary, f, ensure_ascii=False, indent=2)

print(f'Repaired {changed} school locations; unknown regions remaining: {summary["unknown_region_count"]}')
