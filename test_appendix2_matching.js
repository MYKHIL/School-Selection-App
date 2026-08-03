import XLSX from 'xlsx';
import fs from 'fs';

const xlsxPath = './scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx';
const workbook = XLSX.readFile(xlsxPath);

const existingSchools = JSON.parse(fs.readFileSync('./data/schools_all.json', 'utf-8'));

console.log("=== Testing Appendix 2 (Technical Subjects) Matching ===");

// Map normalized school name -> technical subjects array
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
        const subj = String(headerRow[c] || '').trim();
        if (subj && !['S/N', 'REGION', 'GENDER', 'ALL SENIOR HIGH/ TECH SCHOOLS', 'STATUS'].includes(subj.toUpperCase())) {
            colSubjectMap[c] = subj;
        }
    }

    for (let r = 6; r < rows.length; r++) {
        const row = rows[r];
        if (!row || row.length < 3) continue;

        let name = '';
        let region = '';
        for (let c = 1; c < Math.min(4, row.length); c++) {
            const cand = String(row[c] || '').trim();
            if (cand && cand.length > 2 && !/^\d+$/.test(cand) && !['MIXED', 'BOYS', 'GIRLS'].includes(cand.toUpperCase())) {
                if (['AHAFO', 'ASHANTI', 'BONO', 'BONO EAST', 'CENTRAL', 'EASTERN', 'GREATER ACCRA', 'GT. ACCRA', 'NORTH EAST', 'NORTHERN', 'OTI', 'SAVANNAH', 'UPPER EAST', 'UPPER WEST', 'VOLTA', 'WESTERN', 'WESTERN NORTH'].includes(cand.toUpperCase())) {
                    region = cand;
                } else {
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

console.log(`Parsed technical subjects for ${app2TechMap.size} SHTS schools from Appendix 2.`);

let matchedCount = 0;
let techSchoolsCount = 0;

for (const school of existingSchools) {
    const hasTech = school.progs.includes('TECH') || school.type === 'SHTS';
    if (hasTech) techSchoolsCount++;

    const normKey = school.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    let foundSubjs = app2TechMap.get(normKey);

    if (!foundSubjs) {
        // Try substring matching
        for (const [key, subjs] of app2TechMap.entries()) {
            if (key.includes(normKey) || normKey.includes(key)) {
                foundSubjs = subjs;
                break;
            }
        }
    }

    if (foundSubjs) {
        matchedCount++;
    }
}

console.log(`Total TECH / SHTS schools in database: ${techSchoolsCount}`);
console.log(`Matched with Appendix 2 technical subjects: ${matchedCount}`);
