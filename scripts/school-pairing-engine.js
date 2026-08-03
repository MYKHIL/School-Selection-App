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

        getSchoolSearchRadius(school, selectedDistrict, selectedRegion, selectedLocality) {
            const app = this.app;
            const sameDistrict = app.normalizeDistrict(school.district) === app.normalizeDistrict(selectedDistrict);
            const localityMatch = app.matchesLocality(school, selectedLocality, selectedRegion);
            if (sameDistrict || localityMatch) return 1;
            if (app.isNearbyDistrictMatch(school, selectedDistrict)) return 2;
            const sameRegion = app.normalizeRegion(school.region) === app.normalizeRegion(selectedRegion);
            if (sameRegion || app.isRegionNeighbor(selectedRegion, school.region)) return 3;

            const regionClusters = {
                'Gt. Accra': 'coastal',
                'Central': 'coastal',
                'Western': 'coastal',
                'Volta': 'coastal',
                'Eastern': 'middle',
                'Ashanti': 'middle',
                'Ahafo': 'middle',
                'Bono': 'middle',
                'Bono East': 'middle',
                'Western North': 'middle',
                'Northern': 'north',
                'North East': 'north',
                'Savannah': 'north',
                'Upper East': 'north',
                'Upper West': 'north',
                'Oti': 'north'
            };

            const schoolCluster = regionClusters[app.normalizeRegion(school.region)] || 'far';
            const selectedCluster = regionClusters[app.normalizeRegion(selectedRegion)] || 'far';
            if (schoolCluster && selectedCluster && schoolCluster === selectedCluster) return 4;
            return 5;
        }

        isRing1DaySchool(school, selectedDistrict, selectedRegion, selectedLocality) {
            if (!school || !school.status || !school.status.toLowerCase().includes('day')) return false;
            return this.getSchoolSearchRadius(school, selectedDistrict, selectedRegion, selectedLocality) === 1;
        }

        getGeographicProximityScore(school, selectedDistrict, selectedRegion, userLocality) {
            const app = this.app;
            const sameDistrict = app.normalizeDistrict(school.district) === app.normalizeDistrict(selectedDistrict);
            if (sameDistrict) return 100;

            const localityStrength = app.getLocalityMatchStrength(school, userLocality);
            if (localityStrength >= 2) return 85;

            const nearbyDistrict = app.isNearbyDistrictMatch(school, selectedDistrict);
            const sameRegion = app.normalizeRegion(school.region) === app.normalizeRegion(selectedRegion);
            const nearbyRegion = app.isRegionNeighbor(selectedRegion, school.region);

            if (nearbyDistrict) return 72;
            if (sameRegion) return 55;
            if (nearbyRegion) return 40;
            if (localityStrength === 1) return 28;

            const regionClusters = {
                'Gt. Accra': 'coastal',
                'Central': 'coastal',
                'Western': 'coastal',
                'Volta': 'coastal',
                'Eastern': 'middle',
                'Ashanti': 'middle',
                'Ahafo': 'middle',
                'Bono': 'middle',
                'Bono East': 'middle',
                'Western North': 'middle',
                'Northern': 'north',
                'North East': 'north',
                'Savannah': 'north',
                'Upper East': 'north',
                'Upper West': 'north',
                'Oti': 'north'
            };

            const schoolCluster = regionClusters[app.normalizeRegion(school.region)] || 'far';
            const selectedCluster = regionClusters[app.normalizeRegion(selectedRegion)] || 'far';
            if (schoolCluster && selectedCluster && schoolCluster === selectedCluster) return 12;
            return 6;
        }

        isCatchmentMatch(school, selectedDistrict, selectedRegion) {
            const app = this.app;
            const sameRegion = app.normalizeRegion(school.region) === app.normalizeRegion(selectedRegion);
            const sameDistrict = app.normalizeDistrict(school.district) === app.normalizeDistrict(selectedDistrict);
            return sameDistrict || sameRegion;
        }

        getAggregateStrategy(aggregate) {
            if (aggregate <= 10) {
                return { allowA: true, allowB: true, allowC: true, maxA: 2, maxB: 3, categoryAWeight: 18, categoryBWeight: 10, categoryCWeight: -4 };
            }
            if (aggregate <= 18) {
                return { allowA: true, allowB: true, allowC: true, maxA: 1, maxB: 3, categoryAWeight: 14, categoryBWeight: 8, categoryCWeight: 2 };
            }
            if (aggregate <= 24) {
                return { allowA: false, allowB: true, allowC: true, maxA: 0, maxB: 2, categoryAWeight: -12, categoryBWeight: 8, categoryCWeight: 10 };
            }
            return { allowA: false, allowB: false, allowC: true, maxA: 0, maxB: 0, categoryAWeight: -24, categoryBWeight: -8, categoryCWeight: 12 };
        }

        isSchoolAllowedByAggregate(school, strategy) {
            if (!strategy) return true;
            if (school.category === 'A' && !strategy.allowA) return false;
            if (school.category === 'B' && !strategy.allowB) return false;
            if (school.category === 'C' && !strategy.allowC) return false;
            return true;
        }

        scoreSchoolForSelection(school, selectedProg, selectedDistrict, selectedRegion, userLocality, strategy) {
            const app = this.app;
            let score = 0;

            if (selectedProg) {
                if (app.schoolMatchesSelectedProgram(school, [selectedProg])) {
                    score += 20;
                } else if (school.progs.includes('GEN. SCI')) {
                    score += 8;
                } else if (school.progs.includes('GEN. ARTS') && selectedProg === 'GEN. ARTS') {
                    score += 12;
                }
            }

            const proximityBonus = this.getGeographicProximityScore(school, selectedDistrict, selectedRegion, userLocality);
            score += proximityBonus;

            if (this.isCatchmentMatch(school, selectedDistrict, selectedRegion)) {
                score += 8;
            }

            if (school.category === 'A') {
                score += strategy.categoryAWeight;
            } else if (school.category === 'B') {
                score += strategy.categoryBWeight;
            } else if (school.category === 'C') {
                score += strategy.categoryCWeight;
            }

            if (!this.isSchoolAllowedByAggregate(school, strategy)) {
                score -= 40;
            }

            if (school.category === 'A' && strategy.allowA && strategy.maxA > 0) {
                score += 4;
            }
            if (school.category === 'B' && strategy.allowB && strategy.maxB > 0) {
                score += 2;
            }

            if (selectedProg === 'TECH' && school.type === 'TVET') {
                score += 14;
            } else if (selectedProg === 'STEM' && (school.type === 'SHTS' || school.type === 'STEM')) {
                score += 12;
            } else if (selectedProg === 'TECH' && school.progs.includes('TECH')) {
                score += 10;
            } else if (selectedProg === 'STEM' && school.progs.includes('STEM')) {
                score += 10;
            }

            if (selectedProg && !app.schoolMatchesSelectedProgram(school, [selectedProg]) && selectedProg !== 'GEN. SCI' && selectedProg !== 'GEN. ARTS' && !school.progs.includes('GEN. SCI')) {
                score -= 2;
            }

            if (school.gender === 'Mixed') {
                score += 3;
            }

            return score;
        }

        getPreferredResidenceType(school, selectedDistrict, selectedRegion, userLocality, dayCount, boardingCount) {
            const proximity = this.getGeographicProximityScore(school, selectedDistrict, selectedRegion, userLocality);
            const daySlotsRemaining = 3 - dayCount;
            const boardingSlotsRemaining = 5 - boardingCount;

            if (proximity >= 14 && daySlotsRemaining > 0) {
                return 'Day';
            }

            if (dayCount >= 3) {
                return boardingSlotsRemaining > 0 ? 'Boarding' : 'Day';
            }

            if (boardingCount >= 5) {
                return daySlotsRemaining > 0 ? 'Day' : 'Boarding';
            }

            return daySlotsRemaining > 0 ? 'Day' : 'Boarding';
        }

        buildValidCombination(pool, selectedProg, strategy, selectedDistrict, selectedRegion, selectedLocality, maxA, maxB, countC) {
            const selected = [];
            const usedCodes = new Set();
            const categoryCounts = { A: 0, B: 0, C: 0 };
            const targetCount = 8;
            this.appendPackageDebug(`Building package target A:${maxA} B:${maxB} C:${countC} from ${pool.length} schools`);
            const totalDaySlots = 3;
            const totalBoardingSlots = 5;

            const dayCount = () => selected.filter(item => item.res === 'Day').length;
            const boardingCount = () => selected.filter(item => item.res === 'Boarding').length;

            const canUseCategory = cat => {
                if (cat === 'A') return categoryCounts.A < maxA;
                if (cat === 'B') return categoryCounts.B < maxB;
                if (cat === 'C') return categoryCounts.C < countC;
                return false;
            };

            const sortByScore = schools => [...schools]
                .filter(s => s && s.code && !usedCodes.has(s.code))
                .sort((a, b) => this.scoreSchoolForSelection(b, selectedProg, selectedDistrict, selectedRegion, selectedLocality, strategy)
                    - this.scoreSchoolForSelection(a, selectedProg, selectedDistrict, selectedRegion, selectedLocality, strategy));

            const addSelectedSchool = (school, residence) => {
                if (!school || !residence) return false;
                if (usedCodes.has(school.code)) return false;
                if (!canUseCategory(school.category)) return false;
                selected.push({ ...school, res: residence, prog: selectedProg });
                usedCodes.add(school.code);
                categoryCounts[school.category] += 1;
                return true;
            };

            // 1. Select Category A (up to maxA)
            const candA = sortByScore(pool.filter(s => s.category === 'A'));
            for (const sch of candA) {
                if (categoryCounts.A >= maxA || selected.length >= targetCount) break;
                const status = (sch.status || '').toLowerCase();
                const res = status.includes('boarding') ? 'Boarding' : (status.includes('day') ? 'Day' : null);
                if (res && addSelectedSchool(sch, res)) {
                    // added successfully
                }
            }

            // 2. Select Category B (up to maxB)
            const candB = sortByScore(pool.filter(s => s.category === 'B'));
            for (const sch of candB) {
                if (categoryCounts.B >= maxB || selected.length >= targetCount) break;
                const status = (sch.status || '').toLowerCase();
                const res = status.includes('boarding') ? 'Boarding' : (status.includes('day') ? 'Day' : null);
                if (res && addSelectedSchool(sch, res)) {
                    // added successfully
                }
            }

            // 3. Select Category C (up to countC)
            const candC = sortByScore(pool.filter(s => s.category === 'C'));
            for (const sch of candC) {
                if (categoryCounts.C >= countC || selected.length >= targetCount) break;
                const status = (sch.status || '').toLowerCase();
                const res = status.includes('day') ? 'Day' : (status.includes('boarding') ? 'Boarding' : null);
                if (res && addSelectedSchool(sch, res)) {
                    // added successfully
                }
            }

            // 4. Fill remaining slots if any (e.g. if category counts couldn't be fully met because of pool size)
            if (selected.length < targetCount) {
                // temporarily relax category limits slightly to reach 8 unique schools while keeping maxA <= 2 and maxB <= 3
                const fillCand = sortByScore(pool.filter(s => !usedCodes.has(s.code)));
                for (const sch of fillCand) {
                    if (selected.length >= targetCount) break;
                    if (sch.category === 'A' && categoryCounts.A >= Math.max(maxA, 2)) continue;
                    if (sch.category === 'B' && categoryCounts.B >= Math.max(maxB, 3)) continue;
                    const status = (sch.status || '').toLowerCase();
                    const res = status.includes('day') ? 'Day' : (status.includes('boarding') ? 'Boarding' : null);
                    if (res) {
                        selected.push({ ...sch, res, prog: selectedProg });
                        usedCodes.add(sch.code);
                        categoryCounts[sch.category] += 1;
                    }
                }
            }

            // Ensure exactly 8 choices
            let finalSelected = selected.slice(0, targetCount);

            // Post-process residence to achieve exactly 3 Day and 5 Boarding if mixed status available
            let dCount = finalSelected.filter(item => item.res === 'Day').length;
            let bCount = finalSelected.filter(item => item.res === 'Boarding').length;

            if (dCount < 3) {
                for (const item of finalSelected) {
                    if (dCount >= 3) break;
                    if (item.res === 'Boarding') {
                        const status = (item.status || '').toLowerCase();
                        if (status.includes('day')) {
                            item.res = 'Day';
                            dCount++;
                            bCount--;
                        }
                    }
                }
            }
            if (bCount < 5) {
                for (const item of finalSelected) {
                    if (bCount >= 5) break;
                    if (item.res === 'Day') {
                        const status = (item.status || '').toLowerCase();
                        if (status.includes('boarding')) {
                            item.res = 'Boarding';
                            bCount++;
                            dCount--;
                        }
                    }
                }
            }

            const finalCategoryCounts = finalSelected.reduce((counts, item) => {
                counts[item.category] = (counts[item.category] || 0) + 1;
                return counts;
            }, { A: 0, B: 0, C: 0 });

            this.appendPackageDebug(`Package result size=${finalSelected.length}/${targetCount} categories=A:${finalCategoryCounts.A}/B:${finalCategoryCounts.B}/C:${finalCategoryCounts.C} res=Boarding:${bCount}/Day:${dCount}`);
            return finalSelected;
        }
    }

    global.SchoolPairingEngine = SchoolPairingEngine;
})(window);
