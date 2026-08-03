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
            const remainingDaySlots = () => totalDaySlots - dayCount();
            const remainingBoardingSlots = () => totalBoardingSlots - boardingCount();

            const canUseCategory = cat => {
                if (cat === 'A') return categoryCounts.A < maxA || selected.length < targetCount;
                if (cat === 'B') return categoryCounts.B < maxB || selected.length < targetCount;
                if (cat === 'C') return categoryCounts.C < countC || selected.length < targetCount;
                return true;
            };

            const sortByScore = schools => [...schools]
                .filter(s => s && s.code && !usedCodes.has(s.code))
                .sort((a, b) => this.scoreSchoolForSelection(b, selectedProg, selectedDistrict, selectedRegion, selectedLocality, strategy)
                    - this.scoreSchoolForSelection(a, selectedProg, selectedDistrict, selectedRegion, selectedLocality, strategy));

            const chooseResidence = sch => {
                const status = (sch.status || '').toLowerCase();
                const dayAllowed = status.includes('day');
                const boardingAllowed = status.includes('boarding');
                const remainingDay = remainingDaySlots();
                const remainingBoarding = remainingBoardingSlots();

                if (!dayAllowed && !boardingAllowed) return null;

                const isDayOnly = dayAllowed && !boardingAllowed;
                const isBoardingOnly = boardingAllowed && !dayAllowed;
                const isMixed = dayAllowed && boardingAllowed;

                if (isDayOnly) return remainingDay > 0 ? 'Day' : null;
                if (isBoardingOnly) return remainingBoarding > 0 ? 'Boarding' : null;

                if (remainingBoarding === 0 && remainingDay > 0) return 'Day';
                if (remainingDay === 0 && remainingBoarding > 0) return 'Boarding';
                if (remainingDay > 0 && remainingBoarding > 0) return remainingBoarding > 0 && (dayCount() < 3 || boardingCount() < 5) ? 'Boarding' : 'Day';
                if (remainingDay > 0) return 'Day';
                if (remainingBoarding > 0) return 'Boarding';
                return null;
            };

            const reserveSlot8 = () => {
                const ring1Days = sortByScore(pool.filter(s => this.isRing1DaySchool(s, selectedDistrict, selectedRegion, selectedLocality)));
                if (ring1Days.length > 0) return ring1Days[0];
                const regionDays = sortByScore(pool.filter(s => s.status && s.status.toLowerCase().includes('day')
                    && this.app.normalizeRegion(s.region) === this.app.normalizeRegion(selectedRegion)));
                return regionDays[0] || null;
            };

            const pickPriorityDaySchool = () => {
                const daySchools = sortByScore(pool.filter(s => !usedCodes.has(s.code) && s.status && s.status.toLowerCase().includes('day')));
                const ring1 = daySchools.filter(s => this.getSchoolSearchRadius(s, selectedDistrict, selectedRegion, selectedLocality) === 1);
                if (ring1.length > 0) return ring1[0];
                const ring2 = daySchools.filter(s => this.getSchoolSearchRadius(s, selectedDistrict, selectedRegion, selectedLocality) === 2);
                if (ring2.length > 0) return ring2[0];
                const sameRegion = daySchools.filter(s => this.app.normalizeRegion(s.region) === this.app.normalizeRegion(selectedRegion));
                if (sameRegion.length > 0) return sameRegion[0];
                return daySchools[0] || null;
            };

            const forcePriorityDayChoice = () => {
                if (selected.length >= targetCount || dayCount() >= 3) return false;
                const priorityDay = pickPriorityDaySchool();
                if (!priorityDay) return false;
                const residence = chooseResidence(priorityDay);
                if (residence !== 'Day') return false;
                selected.push({ ...priorityDay, res: 'Day', prog: selectedProg });
                usedCodes.add(priorityDay.code);
                categoryCounts[priorityDay.category] += 1;
                return true;
            };

            const addSelectedSchool = (school, residence) => {
                if (!school || !residence) return false;
                selected.push({ ...school, res: residence, prog: selectedProg });
                usedCodes.add(school.code);
                categoryCounts[school.category] += 1;
                return true;
            };

            const selectFromCategory = (category, limit) => {
                let count = 0;
                for (let radius = 1; radius <= 5 && count < limit; radius++) {
                    const candidates = sortByScore(pool.filter(s => !usedCodes.has(s.code)
                        && s.category === category
                        && this.getSchoolSearchRadius(s, selectedDistrict, selectedRegion, selectedLocality) === radius));
                    for (const sch of candidates) {
                        if (selected.length >= targetCount) break;
                        if (!canUseCategory(sch.category)) continue;
                        const residence = chooseResidence(sch);
                        if (!residence) continue;
                        if (addSelectedSchool(sch, residence)) {
                            count += 1;
                        }
                        if (selected.length >= targetCount) break;
                    }
                }
            };

            const fillRemainingSlots = () => {
                for (let radius = 1; radius <= 5 && selected.length < targetCount; radius++) {
                    const candidates = sortByScore(pool.filter(s => !usedCodes.has(s.code)
                        && this.getSchoolSearchRadius(s, selectedDistrict, selectedRegion, selectedLocality) === radius));
                    for (const sch of candidates) {
                        if (selected.length >= targetCount) break;
                        if (!canUseCategory(sch.category)) continue;
                        const residence = chooseResidence(sch);
                        if (!residence) continue;
                        addSelectedSchool(sch, residence);
                    }
                }
            };

            const reservedChoice = reserveSlot8();
            if (reservedChoice) usedCodes.add(reservedChoice.code);

            selectFromCategory('A', maxA);
            selectFromCategory('B', maxB);
            selectFromCategory('C', countC);
            if (selected.length < targetCount) fillRemainingSlots();
            if (dayCount() < 3) forcePriorityDayChoice();
            if (selected.length < targetCount) fillRemainingSlots();

            if (selected.length < targetCount && reservedChoice) {
                const residence = chooseResidence(reservedChoice);
                if (residence) {
                    addSelectedSchool(reservedChoice, residence);
                }
            } else if (selected.length < targetCount) {
                const fallbackDay = sortByScore(pool.filter(s => !usedCodes.has(s.code)
                    && s.status && s.status.toLowerCase().includes('day')))[0];
                if (fallbackDay) {
                    const residence = chooseResidence(fallbackDay);
                    if (residence) {
                        addSelectedSchool(fallbackDay, residence);
                    }
                }
            }

            const fillToEight = () => {
                for (let radius = 1; radius <= 5 && selected.length < targetCount; radius++) {
                    const candidates = sortByScore(pool.filter(s => !usedCodes.has(s.code)
                        && this.getSchoolSearchRadius(s, selectedDistrict, selectedRegion, selectedLocality) === radius));
                    for (const sch of candidates) {
                        if (selected.length >= targetCount) break;
                        if (!canUseCategory(sch.category)) continue;
                        const residence = chooseResidence(sch);
                        if (!residence) continue;
                        addSelectedSchool(sch, residence);
                    }
                }
            };

            if (selected.length < targetCount) fillToEight();

            if (selected.length < targetCount) {
                const fallbackSchools = sortByScore(pool.filter(s => !usedCodes.has(s.code)));
                for (const sch of fallbackSchools) {
                    if (selected.length >= targetCount) break;
                    const residence = chooseResidence(sch);
                    if (!residence) continue;
                    addSelectedSchool(sch, residence);
                }
            }

            const finalDayCount = selected.filter(item => item.res === 'Day').length;
            const finalBoardingCount = selected.filter(item => item.res === 'Boarding').length;
            const finalCategoryCounts = selected.reduce((counts, item) => {
                counts[item.category] = (counts[item.category] || 0) + 1;
                return counts;
            }, { A: 0, B: 0, C: 0 });
            this.appendPackageDebug(`Package result size=${selected.length}/${targetCount} categories=A:${finalCategoryCounts.A}/B:${finalCategoryCounts.B}/C:${finalCategoryCounts.C} res=Boarding:${finalBoardingCount}/Day:${finalDayCount}`);
            return selected.slice(0, targetCount);
        }
    }

    global.SchoolPairingEngine = SchoolPairingEngine;
})(window);
