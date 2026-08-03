(function (global) {
    class SchoolPairingEngine {
        constructor(appContext) {
            this.app = appContext;
        }

        appendPackageDebug(message) {
            if (this.app && typeof this.app.appendPackageDebug === 'function') {
                this.app.appendPackageDebug(message);
            }
        }

        getGeographicTier(school, candidate) {
            if (!school || !candidate) return 5;
            const schLoc = (school.location || school.locality || '').toLowerCase().trim();
            const candLoc = (candidate.locality || '').toLowerCase().trim();

            const schDist = (school.district || '').toLowerCase().trim();
            const candDist = (candidate.district || '').toLowerCase().trim();

            const schReg = (school.region || '').toLowerCase().trim();
            const candReg = (candidate.region || '').toLowerCase().trim();

            // Tier 0: Locality match
            if (candLoc && schLoc && schLoc.includes(candLoc) && (!candDist || schDist === candDist)) {
                return 0;
            }

            // Tier 1: Same District
            if (schDist && candDist && schDist === candDist) {
                return 1;
            }

            // Tier 2: Adjacent District
            const dNeighborsMap = global.CANONICAL_DISTRICT_NEIGHBORS || {};
            const candDistRaw = candidate.district || '';
            const adjDists = (dNeighborsMap[candDistRaw] || []).map(d => String(d).toLowerCase().trim());
            if (schDist && adjDists.includes(schDist)) {
                return 2;
            }

            // Tier 3: Same Region
            if (schReg && candReg && schReg === candReg) {
                return 3;
            }

            // Tier 4: Adjacent Region
            const rNeighborsMap = global.CANONICAL_REGION_NEIGHBORS || {};
            const candRegRaw = candidate.region || '';
            const adjRegs = (rNeighborsMap[candRegRaw] || []).map(r => String(r).toLowerCase().trim());
            if (schReg && adjRegs.includes(schReg)) {
                return 4;
            }

            // Tier 5: National
            return 5;
        }

        haversineDistance(lat1, lon1, lat2, lon2) {
            const R = 6371.0;
            const dLat = (lat2 - lat1) * Math.PI / 180.0;
            const dLon = (lon2 - lon1) * Math.PI / 180.0;
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                      Math.cos(lat1 * Math.PI / 180.0) * Math.cos(lat2 * Math.PI / 180.0) *
                      Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        }

        getEntityCoordinates(entity) {
            if (!entity) return { lat: 5.6037, lng: -0.1870 };
            if (entity.lat !== undefined && entity.lng !== undefined) {
                return { lat: parseFloat(entity.lat), lng: parseFloat(entity.lng) };
            }
            if (entity.latitude !== undefined && entity.longitude !== undefined) {
                return { lat: parseFloat(entity.latitude), lng: parseFloat(entity.longitude) };
            }
            const regionCoords = {
                "Greater Accra": { lat: 5.6037, lng: -0.1870 },
                "Gt. Accra": { lat: 5.6037, lng: -0.1870 },
                "Eastern": { lat: 6.1000, lng: -0.2667 },
                "Central": { lat: 5.3000, lng: -1.0000 },
                "Western": { lat: 5.5000, lng: -2.0000 },
                "Western North": { lat: 6.3000, lng: -2.8000 },
                "Volta": { lat: 6.6000, lng: 0.4700 },
                "Oti": { lat: 7.9000, lng: 0.3000 },
                "Ashanti": { lat: 6.6885, lng: -1.6244 },
                "Bono": { lat: 7.3333, lng: -2.3333 },
                "Bono East": { lat: 7.7500, lng: -1.0500 },
                "Ahafo": { lat: 7.0000, lng: -2.3333 },
                "Northern": { lat: 9.4007, lng: -0.8393 },
                "Savannah": { lat: 9.0000, lng: -1.8000 },
                "North East": { lat: 10.5000, lng: -0.3700 },
                "Upper East": { lat: 10.7856, lng: -0.8514 },
                "Upper West": { lat: 10.3000, lng: -2.5000 }
            };
            const base = regionCoords[entity.region] || { lat: 5.6037, lng: -0.1870 };
            const identifier = String(entity.code || entity.name || entity.locality || "");
            let hashVal = 0;
            for (let i = 0; i < identifier.length; i++) {
                hashVal += identifier.charCodeAt(i);
            }
            const latOffset = ((hashVal % 100) - 50) / 1000.0;
            const lngOffset = (((hashVal * 7) % 100) - 50) / 1000.0;
            return { lat: base.lat + latOffset, lng: base.lng + lngOffset };
        }

        generateRadialPackages(candidate, schoolPool) {
            const candCoords = this.getEntityCoordinates(candidate);
            const candProg = candidate.program || candidate.requested_program;

            const tieredSchools = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [] };

            (schoolPool || []).forEach(sch => {
                const schCoords = this.getEntityCoordinates(sch);
                const dist = this.haversineDistance(candCoords.lat, candCoords.lng, schCoords.lat, schCoords.lng);
                const tier = this.getGeographicTier(sch, candidate);
                tieredSchools[tier].push({ school: sch, tier, distance: dist });
            });

            for (let t = 0; t < 6; t++) {
                tieredSchools[t].sort((a, b) => a.distance - b.distance);
            }

            const packageConfigs = [
                { package_id: 1, package_name: "Balanced Optimal Strategy", quotas: { A: 2, B: 3, C: 3 }, allow_only_c: false },
                { package_id: 2, package_name: "Safe Placement Focus", quotas: { A: 1, B: 3, C: 4 }, allow_only_c: false },
                { package_id: 3, package_name: "High Assurance / Technical", quotas: { A: 0, B: 2, C: 6 }, allow_only_c: false },
                { package_id: 4, package_name: "Category C Focus", quotas: { A: 0, B: 0, C: 8 }, allow_only_c: true }
            ];

            const results = [];

            packageConfigs.forEach(pkgCfg => {
                const selectedSchools = [];
                const selectedCodes = new Set();
                const categoryCounts = { A: 0, B: 0, C: 0 };
                const quotas = pkgCfg.quotas;
                const allowOnlyC = pkgCfg.allow_only_c;

                // Pass across 6 tiers
                for (let tierIdx = 0; tierIdx < 6; tierIdx++) {
                    if (selectedSchools.length >= 8) break;
                    const tierList = tieredSchools[tierIdx] || [];
                    for (const entry of tierList) {
                        if (selectedSchools.length >= 8) break;
                        const sch = entry.school;
                        const code = sch.code;
                        const cat = (sch.category || 'C').toUpperCase();

                        if (selectedCodes.has(code)) continue;
                        if (allowOnlyC && cat !== 'C') continue;
                        if ((categoryCounts[cat] || 0) >= (quotas[cat] || 0)) continue;

                        const status = (sch.status || '').toLowerCase();
                        const dist = entry.distance;
                        const tempDistances = selectedSchools.map(s => s._dist || 0).concat(dist).sort((a, b) => a - b);
                        const rankOfThisSch = tempDistances.indexOf(dist);

                        if (rankOfThisSch < 3 && !status.includes('day')) continue;
                        if (rankOfThisSch >= 3 && !status.includes('boarding')) continue;

                        selectedSchools.push({ ...sch, res: 'Boarding', prog: candProg || 'GEN. SCI', _dist: dist });
                        selectedCodes.add(code);
                        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
                    }
                }

                // Fallback pass if < 8
                if (selectedSchools.length < 8) {
                    const allFlat = [];
                    for (let t = 0; t < 6; t++) {
                        allFlat.push(...(tieredSchools[t] || []));
                    }
                    allFlat.sort((a, b) => a.distance - b.distance);

                    for (const entry of allFlat) {
                        if (selectedSchools.length >= 8) break;
                        const sch = entry.school;
                        const code = sch.code;
                        const cat = (sch.category || 'C').toUpperCase();

                        if (selectedCodes.has(code)) continue;
                        if (allowOnlyC && cat !== 'C') continue;

                        const status = (sch.status || '').toLowerCase();
                        const dist = entry.distance;
                        const tempDistances = selectedSchools.map(s => s._dist || 0).concat(dist).sort((a, b) => a - b);
                        const rankOfThisSch = tempDistances.indexOf(dist);

                        if (rankOfThisSch < 3 && !status.includes('day')) continue;
                        if (rankOfThisSch >= 3 && !status.includes('boarding')) continue;

                        selectedSchools.push({ ...sch, res: 'Boarding', prog: candProg || 'GEN. SCI', _dist: dist });
                        selectedCodes.add(code);
                        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
                    }
                }

                // Post-process: sort selected schools by distance and assign "Day" to top 3 closest and "Boarding" to remaining 5
                if (selectedSchools.length > 0) {
                    const distSortedIndices = selectedSchools.map((s, idx) => ({ idx, dist: s._dist || 0 }))
                        .sort((a, b) => a.dist - b.dist);
                    
                    distSortedIndices.forEach((item, rankPos) => {
                        selectedSchools[item.idx].res = rankPos < 3 ? 'Day' : 'Boarding';
                    });

                    // Sort choices Cat A -> Cat B -> Cat C
                    const catPriority = { 'A': 1, 'B': 2, 'C': 3 };
                    selectedSchools.sort((a, b) => {
                        const pA = catPriority[(a.category || 'C').toUpperCase()] || 3;
                        const pB = catPriority[(b.category || 'C').toUpperCase()] || 3;
                        if (pA !== pB) return pA - pB;
                        return (a._dist || 0) - (b._dist || 0);
                    });
                }

                results.push({
                    package_id: pkgCfg.package_id,
                    package_name: pkgCfg.package_name,
                    schools: selectedSchools
                });
            });

            return results;
        }

        buildValidCombination(pool, selectedProg, strategy, selectedDistrict, selectedRegion, selectedLocality, maxA, maxB, countC) {
            const candidate = {
                locality: selectedLocality,
                district: selectedDistrict,
                region: selectedRegion,
                program: selectedProg
            };
            const pkgs = this.generateRadialPackages(candidate, pool);
            if (maxA === 2 && maxB === 3) return pkgs[0].schools;
            if (maxA === 1 && maxB === 3) return pkgs[1].schools;
            if (maxA === 0 && maxB === 2) return pkgs[2].schools;
            return pkgs[3].schools;
        }
    }

    global.SchoolPairingEngine = SchoolPairingEngine;
})(window);
