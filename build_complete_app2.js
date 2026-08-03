import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

const xlsxPath = './scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx';
const workbook = XLSX.readFile(xlsxPath);

const GHANA_REGIONS = [
    'Greater Accra', 'Western North', 'Bono East', 'North East',
    'Upper West', 'Upper East', 'Eastern', 'Central', 'Western',
    'Ashanti', 'Volta', 'Northern', 'Bono', 'Ahafo', 'Oti', 'Savannah'
];

const REGION_SET = new Set(GHANA_REGIONS.map(r => r.toUpperCase()));

function normalizeCode(val) {
    if (!val) return null;
    let s = String(val).trim();
    if (s.endsWith('.0')) s = s.slice(0, -2);
    if (!/^\d{5,7}$/.test(s)) return null;
    return s.padStart(7, '0');
}

function inferRegionFromText(text) {
    if (!text) return null;
    const upper = String(text).toUpperCase();
    for (const reg of GHANA_REGIONS) {
        if (upper.includes(reg.toUpperCase())) return reg;
    }
    return null;
}

function isRegionName(name) {
    if (!name) return true;
    const clean = String(name).trim().toUpperCase();
    if (REGION_SET.has(clean)) return true;
    if (/^(REGION|DISTRICT|PROVINCE|STATE|MINISTRY|GES|TVET|REGISTER|LIST|CATEGORY|CAT|S\/N|CODE|SCHOOL|NAME|LOCATION|GENDER|STATUS|TYPE)/i.test(clean)) return true;
    return false;
}

const CODE_TO_PROGRAM = {
    '101': 'AGRIC',
    '201': 'BUS',
    '301': 'TECH',
    '401': 'HOM. ECON.',
    '402': 'VIS. ARTS',
    '501': 'GEN. ARTS',
    '502': 'GEN. SCI',
    '503': 'STEM',
    '504': 'LANGUAGES'
};

const HEADER_TO_PROGRAM = {
    'AGRIC': 'AGRIC', 'BUS': 'BUS', 'TECH': 'TECH', 'HOM': 'HOM. ECON.',
    'VIS': 'VIS. ARTS', 'GEN. ARTS': 'GEN. ARTS', 'GEN. SCI': 'GEN. SCI', 'STEM': 'STEM'
};

const schoolMap = new Map();

function cleanPrograms(progsArray) {
    if (!Array.isArray(progsArray)) return [];
    const set = new Set();
    for (const p of progsArray) {
        if (!p) continue;
        const trimmed = String(p).trim();
        const upper = trimmed.toUpperCase();
        if (upper === 'TVET' || upper === 'REFER TO APPENDIX 1' || upper === 'NULL' || upper === 'NONE') continue;
        set.add(trimmed);
    }
    return Array.from(set);
}

console.log("=== STEP 1: Parse Appendix 2 (Specific Technical Subjects - Sheets 43 to 50) ===");
const app2TechMap = new Map();

for (let sIdx = 42; sIdx <= 49; sIdx++) {
    const sheetName = workbook.SheetNames[sIdx];
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) continue;
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: null });
    if (!rows || rows.length < 6) continue;

    const headerRow = rows[5];
    const colSubjectMap = {};
    for (let c = 3; c < headerRow.length; c++) {
        const subj = String(headerRow[c] || '').trim().replace(/\s+/g, ' ');
        if (subj && !['S/N', 'REGION', 'GENDER', 'ALL SENIOR HIGH/ TECH SCHOOLS', 'STATUS'].includes(subj.toUpperCase())) {
            colSubjectMap[c] = subj;
        }
    }

    for (let r = 6; r < rows.length; r++) {
        const row = rows[r];
        if (!row || row.length < 3) continue;

        let name = '';
        for (let c = 1; c < Math.min(4, row.length); c++) {
            const cand = String(row[c] || '').trim();
            if (cand && cand.length > 2 && !/^\d+$/.test(cand) && !['MIXED', 'BOYS', 'GIRLS'].includes(cand.toUpperCase())) {
                if (!['AHAFO', 'ASHANTI', 'BONO', 'BONO EAST', 'CENTRAL', 'EASTERN', 'GREATER ACCRA', 'GT. ACCRA', 'NORTH EAST', 'NORTHERN', 'OTI', 'SAVANNAH', 'UPPER EAST', 'UPPER WEST', 'VOLTA', 'WESTERN', 'WESTERN NORTH'].includes(cand.toUpperCase())) {
                    name = cand;
                    break;
                }
            }
        }

        if (!name) continue;

        const subjectsSet = new Set();
        for (const [colIdxStr, subjName] of Object.entries(colSubjectMap)) {
            const cIdx = parseInt(colIdxStr, 10);
            if (cIdx < row.length && row[cIdx] !== null && row[cIdx] !== undefined) {
                const val = String(row[cIdx]).trim();
                if (val && val !== '0' && val.toLowerCase() !== 'null') {
                    const upper = val.toUpperCase();
                    if (upper === 'X' || upper === '✓' || upper === 'YES' || /^\d+$/.test(upper)) {
                        subjectsSet.add(subjName);
                    }
                }
            }
        }

        const subjects = Array.from(subjectsSet);
        if (subjects.length > 0) {
            const normKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');
            app2TechMap.set(normKey, subjects);
        }
    }
}
console.log(`Parsed Appendix 2 technical subjects for ${app2TechMap.size} SHTS schools.`);

console.log("\n=== STEP 2: Parse Appendix 1 (TVET Institutes - Sheets 37 to 42) ===");
for (let sIdx = 36; sIdx <= 41; sIdx++) {
    const sheetName = workbook.SheetNames[sIdx];
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) continue;
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: null });
    if (!rows || rows.length < 7) continue;

    const headerRow = rows[5];
    const colTradeMap = {};
    for (let c = 7; c < headerRow.length; c++) {
        const tradeName = String(headerRow[c] || '').trim().replace(/\s+/g, ' ');
        if (tradeName && !['NO. OF PRORAMMES', 'STATUS', 'S/N', 'REGISTER', 'MINISTRY', 'GES', 'DAY', 'BOARDING'].includes(tradeName.toUpperCase())) {
            colTradeMap[c] = tradeName;
        }
    }

    for (let r = 7; r < rows.length; r++) {
        const row = rows[r];
        if (!row || row.length < 5) continue;

        let codeVal = null;
        for (let c = 0; c < Math.min(6, row.length); c++) {
            const raw = String(row[c] || '').trim();
            if (/^\d{5,7}$/.test(raw)) {
                codeVal = raw.padStart(7, '0');
                break;
            }
        }

        let instName = String(row[4] || row[3] || '').trim();
        if (!instName || instName.toUpperCase().includes('INSTITUTION') || instName.toUpperCase().includes('REGISTER')) continue;

        let region = String(row[1] || '').trim();
        let district = String(row[2] || '').trim();
        let location = String(row[5] || district || region).trim();
        let gender = String(row[6] || 'Mixed').trim();
        if (!['Mixed', 'Boys', 'Girls'].includes(gender)) gender = 'Mixed';

        let status = 'Day/Boarding';
        for (let c = row.length - 1; c >= Math.max(0, row.length - 3); c--) {
            const val = String(row[c] || '').trim();
            if (/DAY/i.test(val) || /BOARDING/i.test(val)) {
                status = val.replace(/\s+/g, ' ');
                break;
            }
        }

        const tradesSet = new Set();
        for (const [cIdxStr, tradeName] of Object.entries(colTradeMap)) {
            const cIdx = parseInt(cIdxStr, 10);
            if (cIdx < row.length && row[cIdx] !== null && row[cIdx] !== undefined) {
                const val = String(row[cIdx]).trim();
                if (val && val !== '0' && val.toLowerCase() !== 'null') {
                    const upper = val.toUpperCase();
                    if (upper === 'X' || upper === '✓' || upper === 'YES' || /^\d+$/.test(upper)) {
                        tradesSet.add(tradeName);
                    }
                }
            }
        }

        const trades = cleanPrograms(Array.from(tradesSet));
        const schoolKey = codeVal || instName.toUpperCase();
        schoolMap.set(schoolKey, {
            code: codeVal || '9000000',
            name: instName,
            region,
            district,
            location: `${location}, ${region}`,
            category: 'C',
            status,
            gender,
            type: 'TVET',
            progs: trades,
            programNames: trades,
            isTvet: true
        });
    }
}

console.log("\n=== STEP 3: Parse Main Register (Sheets 1 to 36) ===");
for (let sIdx = 0; sIdx < 36; sIdx++) {
    const sheetName = workbook.SheetNames[sIdx];
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) continue;
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: null });
    if (!rows || rows.length === 0) continue;

    let sheetCategory = 'C';
    const topText = rows.slice(0, 10).map(r => (r||[]).join(' ')).join(' ').toUpperCase();
    if (topText.includes('CATEGORY A') || topText.includes('CAT A')) sheetCategory = 'A';
    else if (topText.includes('CATEGORY B') || topText.includes('CAT B')) sheetCategory = 'B';
    else if (topText.includes('CATEGORY C') || topText.includes('CAT C')) sheetCategory = 'C';

    const colProgramMap = {};
    for (let r = 0; r < Math.min(rows.length, 10); r++) {
        const row = rows[r];
        if (!row) continue;
        for (let c = 7; c < row.length; c++) {
            const cellVal = String(row[c] || '').trim().replace(/\s+/g, ' ').toUpperCase();
            if (!cellVal) continue;
            if (CODE_TO_PROGRAM[cellVal]) {
                colProgramMap[c] = CODE_TO_PROGRAM[cellVal];
                continue;
            }
            for (const [key, progName] of Object.entries(HEADER_TO_PROGRAM)) {
                if (cellVal === key || cellVal.includes(key)) {
                    if (!['DISTRICT', 'SCHOOL', 'CODE', 'REGION', 'GENDER', 'LOCATION', 'STATUS', 'TYPE', 'PROGRAMMES', 'NO. OF', 'S/N', 'REGISTER'].includes(cellVal)) {
                        colProgramMap[c] = progName;
                    }
                }
            }
        }
    }

    let currentRegion = inferRegionFromText(sheetName) || 'Ashanti';
    let currentDistrict = 'Central District';

    for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        if (!row || row.length === 0) continue;

        let codeCol = -1;
        let codeVal = null;
        for (let c = 0; c < row.length; c++) {
            const normalized = normalizeCode(row[c]);
            if (normalized) {
                codeCol = c;
                codeVal = normalized;
                break;
            }
        }

        if (codeCol === -1) {
            const rowText = row.join(' ');
            const reg = inferRegionFromText(rowText);
            if (reg && rowText.toUpperCase().includes('REGION')) {
                currentRegion = reg;
            }
            continue;
        }

        let region = currentRegion;
        for (let c = 0; c < codeCol; c++) {
            const cand = String(row[c] || '').trim();
            const regMatch = inferRegionFromText(cand);
            if (regMatch) {
                region = regMatch;
                currentRegion = regMatch;
                break;
            }
        }

        let district = currentDistrict;
        for (let c = 0; c < codeCol; c++) {
            const cand = String(row[c] || '').trim();
            if (cand && !inferRegionFromText(cand) && !/^\d+$/.test(cand) && cand.length > 2 && !isRegionName(cand)) {
                district = cand;
                currentDistrict = cand;
            }
        }

        let name = '';
        for (let c = codeCol + 1; c < Math.min(codeCol + 3, row.length); c++) {
            const cand = String(row[c] || '').trim();
            if (cand && !isRegionName(cand) && !/^\d+$/.test(cand) && cand.length > 2 && !['MIXED', 'BOYS', 'GIRLS', 'DAY', 'BOARDING', 'DAY/BOARDING', 'X', '✓'].includes(cand.toUpperCase())) {
                name = cand;
                break;
            }
        }

        if (!name || isRegionName(name)) continue;
        name = name.replace(/^['"]+|['"]+$/g, '').trim();

        let location = district;
        for (let c = codeCol + 2; c < row.length; c++) {
            const cand = String(row[c] || '').trim();
            if (cand && !isRegionName(cand) && !/^\d+$/.test(cand) && cand.length > 2 && !['MIXED', 'BOYS', 'GIRLS', 'DAY', 'BOARDING', 'DAY/BOARDING', 'X', '✓'].includes(cand.toUpperCase())) {
                location = cand;
                break;
            }
        }

        const rowStr = row.join(' ').toUpperCase();
        let status = 'Day/Boarding';
        if (rowStr.includes('BOARDING') && !rowStr.includes('DAY')) status = 'Boarding';
        else if (rowStr.includes('DAY') && !rowStr.includes('BOARDING')) status = 'Day';

        let gender = 'Mixed';
        if (rowStr.includes('GIRLS') && !rowStr.includes('BOYS')) gender = 'Girls';
        else if (rowStr.includes('BOYS') && !rowStr.includes('GIRLS')) gender = 'Boys';

        let isTvetSchool = codeVal.startsWith('9') || rowStr.includes('REFER TO APPENDIX 1') || rowStr.includes('TECHNICAL INSTITUTE') || name.toUpperCase().includes('TECHNICAL INSTITUTE');

        let type = 'SHS';
        let rawType = null;
        for (let c = row.length - 1; c >= Math.max(0, row.length - 3); c--) {
            const cand = String(row[c] || '').trim().toUpperCase();
            if (['SHS', 'SHTS', 'TVET', 'STEM', 'STEM/TECH', 'STEM/TE'].includes(cand)) {
                rawType = cand;
                break;
            }
        }

        if (rawType) {
            if (rawType === 'STEM/TECH' || rawType === 'STEM/TE') type = 'STEM';
            else type = rawType;
        } else if (isTvetSchool) {
            type = 'TVET';
        } else if (name.toUpperCase().includes('SENIOR HIGH TECH') || name.toUpperCase().includes('SHTS')) {
            type = 'SHTS';
        } else if (name.toUpperCase().includes('STEM')) {
            type = 'STEM';
        }

        const existingTvet = schoolMap.get(codeVal);
        if (existingTvet && existingTvet.isTvet) {
            if (sheetCategory === 'A' || sheetCategory === 'B') existingTvet.category = sheetCategory;
            continue;
        }

        const progsSet = new Set();
        for (const [colIdxStr, progName] of Object.entries(colProgramMap)) {
            const cIdx = parseInt(colIdxStr, 10);
            if (cIdx >= 7 && cIdx < row.length && row[cIdx] !== null && row[cIdx] !== undefined) {
                const val = String(row[cIdx]).trim();
                if (val && val !== '0' && val.toLowerCase() !== 'null') {
                    const upperVal = val.toUpperCase();
                    if (upperVal === 'X' || upperVal === '✓' || upperVal === 'YES' || /^\d+$/.test(upperVal)) {
                        progsSet.add(progName);
                    }
                }
            }
        }

        const progs = cleanPrograms(Array.from(progsSet));

        const existing = schoolMap.get(codeVal);
        if (existing) {
            if (!existing.isTvet) {
                const combinedProgs = cleanPrograms([...existing.progs, ...progs]);
                existing.progs = combinedProgs;
                existing.programNames = combinedProgs;
                existing.type = type;
            }
            if (sheetCategory === 'A' || sheetCategory === 'B') existing.category = sheetCategory;
        } else {
            const schoolObj = {
                code: codeVal,
                name,
                region,
                district,
                location: `${location}, ${region}`,
                category: sheetCategory,
                status,
                gender,
                type,
                progs,
                programNames: progs
            };
            schoolMap.set(codeVal, schoolObj);
        }
    }
}

console.log("\n=== STEP 4: Parse Appendix 4 (STEM Schools - Sheet 52) ===");
const stemSheet = workbook.Sheets['Sheet52'];
if (stemSheet) {
    const rows = XLSX.utils.sheet_to_json(stemSheet, { header: 1, raw: false, defval: null });
    if (rows && rows.length > 10) {
        for (let r = 10; r < rows.length; r++) {
            const row = rows[r];
            if (!row) continue;
            let codeVal = normalizeCode(row[3]);
            if (!codeVal) continue;

            const stemProgsSet = new Set();
            if (row[7] && String(row[7]).trim()) stemProgsSet.add('BIO-MEDICAL SCIENCE');
            if ((row[8] && String(row[8]).trim()) || (row[13] && String(row[13]).trim())) stemProgsSet.add('ENGINEERING SCIENCE');
            if (row[9] && String(row[9]).trim()) stemProgsSet.add('AVIATION & AEROSPACE ENGINEERING');
            if (row[10] && String(row[10]).trim()) stemProgsSet.add('COMPUTING');
            if (row[11] && String(row[11]).trim()) stemProgsSet.add('ROBOTICS');
            if (row[12] && String(row[12]).trim()) stemProgsSet.add('AGRIC. SCIENCE');
            stemProgsSet.add('STEM');

            const stemProgs = cleanPrograms(Array.from(stemProgsSet));

            let school = schoolMap.get(codeVal);
            if (school) {
                if (!school.isTvet) {
                    school.type = 'STEM';
                    const merged = cleanPrograms([...school.progs, ...stemProgs]);
                    school.progs = merged;
                    school.programNames = merged;
                }
            } else {
                school = {
                    code: codeVal,
                    name: String(row[4] || 'STEM High School').trim(),
                    region: String(row[1] || 'Ashanti').trim(),
                    district: String(row[2] || 'District').trim(),
                    location: `${row[5] || ''}, ${row[1] || ''}`,
                    category: 'C',
                    status: 'Day/Boarding',
                    gender: String(row[6] || 'Mixed').trim(),
                    type: 'STEM',
                    progs: stemProgs,
                    programNames: stemProgs
                };
                schoolMap.set(codeVal, school);
            }
        }
    }
}

console.log("\n=== STEP 5: Attach Technical Subjects from Appendix 2 ===");

const DEFAULT_TECH_SUBJECTS = [
    'Technical Drawing',
    'Building Const Tech',
    'Applied Electricity',
    'Auto Mechanics',
    'Woodwork'
];

for (const school of schoolMap.values()) {
    delete school.isTvet;
    school.progs = cleanPrograms(school.progs);

    if (school.progs.length === 0) {
        if (school.type === 'TVET') school.progs = ['TECHNICAL & VOCATIONAL TRADES'];
        else if (school.type === 'STEM') school.progs = ['STEM', 'GEN. SCI'];
        else school.progs = ['GEN. SCI', 'GEN. ARTS'];
    }
    school.programNames = school.progs;

    // Attach technical subjects if school offers TECH or is SHTS
    const offersTech = school.progs.includes('TECH') || school.type === 'SHTS';
    if (offersTech) {
        const normKey = school.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        let matchedSubjs = app2TechMap.get(normKey);

        if (!matchedSubjs) {
            for (const [key, subjs] of app2TechMap.entries()) {
                if (key.includes(normKey) || normKey.includes(key)) {
                    matchedSubjs = subjs;
                    break;
                }
            }
        }

        school.techSubjects = matchedSubjs && matchedSubjs.length > 0 ? matchedSubjs : DEFAULT_TECH_SUBJECTS;
    }
}

const allSchools = Array.from(schoolMap.values()).sort((a, b) => a.code.localeCompare(b.code));
console.log(`\nFinal total unique valid schools: ${allSchools.length}`);

// Sample test
const testSHTS = allSchools.find(s => s.type === 'SHTS' && s.techSubjects);
console.log("\nSample SHTS school with tech subjects:", testSHTS);

const outputDir = './data';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'schools_all.json'), JSON.stringify(allSchools, null, 2), 'utf-8');

const byRegion = {};
for (const s of allSchools) {
    const reg = s.region || 'Unknown';
    if (!byRegion[reg]) byRegion[reg] = [];
    byRegion[reg].push(s);
}
fs.writeFileSync(path.join(outputDir, 'schools_by_region.json'), JSON.stringify(byRegion, null, 2), 'utf-8');

const summary = {
    total_schools: allSchools.length,
    regions: Object.fromEntries(Object.entries(byRegion).map(([k, v]) => [k, v.length])),
    school_types: {
        SHS: allSchools.filter(s => s.type === 'SHS').length,
        SHTS: allSchools.filter(s => s.type === 'SHTS').length,
        TVET: allSchools.filter(s => s.type === 'TVET').length,
        STEM: allSchools.filter(s => s.type === 'STEM').length,
    }
};
fs.writeFileSync(path.join(outputDir, 'schools_summary.json'), JSON.stringify(summary, null, 2), 'utf-8');

const schoolsDataJsContent = `// Preloaded school dataset generated from official 2026 Register
export const PRELOADED_SCHOOLS = ${JSON.stringify(allSchools, null, 2)};
`;
fs.writeFileSync('./scripts/schools-data.js', schoolsDataJsContent, 'utf-8');

console.log("\nSuccessfully built complete dataset with Appendix 2 technical subjects!");
