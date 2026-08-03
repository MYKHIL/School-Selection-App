import XLSX from 'xlsx';
const xlsxPath = './scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx';
const workbook = XLSX.readFile(xlsxPath);

for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: null });
    if (!rows) continue;
    for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        if (!row) continue;
        const rowStr = row.join(' ');
        if (rowStr.includes('0020703') || rowStr.includes('Ayirebi')) {
            console.log(`Sheet "${sheetName}" row ${r+1}:`, row);
        }
    }
}
