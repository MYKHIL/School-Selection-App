import XLSX from 'xlsx';

const xlsxPath = './scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx';
const workbook = XLSX.readFile(xlsxPath);

console.log("=== Inspecting Appendix 2 (Sheets 43 to 50) ===");

for (let sIdx = 42; sIdx <= 49; sIdx++) {
    const sheetName = workbook.SheetNames[sIdx];
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) continue;
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: null });
    console.log(`\n--- Sheet ${sIdx+1}: "${sheetName}" (total rows: ${rows ? rows.length : 0}) ---`);
    if (!rows || rows.length < 6) continue;
    
    // Row 6 (index 5) is usually the header row
    const headerRow = rows[5];
    console.log("Header row (Row 6):", headerRow.filter(Boolean));
    
    // Sample first 3 data rows
    for (let r = 6; r < Math.min(rows.length, 10); r++) {
        if (rows[r]) {
            console.log(`Row ${r+1}:`, rows[r].filter(x => x !== null));
        }
    }
}
