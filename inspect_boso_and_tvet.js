import XLSX from 'xlsx';

const xlsxPath = './scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx';
const workbook = XLSX.readFile(xlsxPath);

console.log("Sheet names in workbook:");
workbook.SheetNames.forEach((name, idx) => {
    console.log(`Sheet ${idx+1}: "${name}"`);
});

// Search for Boso Senior High Technical
for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: null });
    if (!rows) continue;
    for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        if (!row) continue;
        const rowStr = row.join(' ').toUpperCase();
        if (rowStr.includes('BOSO')) {
            console.log(`Found BOSO in sheet "${sheetName}" row ${r+1}:`, row);
        }
    }
}
