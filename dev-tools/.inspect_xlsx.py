from pathlib import Path
import zipfile
import re

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
print('exists', path.exists())
with zipfile.ZipFile(path) as z:
    names = z.namelist()
    worksheet_files = [n for n in names if n.startswith('xl/worksheets/')]
    print('worksheet count', len(worksheet_files))
    print('workbook entries sample', [n for n in names if n.startswith('xl/')][:20])
    if 'xl/workbook.xml' in names:
        wb = z.read('xl/workbook.xml').decode('utf-8', 'replace')
        print('workbook xml length', len(wb))
        print('workbook xml snippet', wb[:1000])
        sheet_names = re.findall(r'<sheet[^>]+name="([^"]+)"[^>]+sheetId="([^"]+)"[^>]+r:id="([^"]+)"', wb)
        print('sheet mappings', sheet_names[:20])
    if 'xl/_rels/workbook.xml.rels' in names:
        rels = z.read('xl/_rels/workbook.xml.rels').decode('utf-8', 'replace')
        print('rels snippet', rels[:1000])
    for file in worksheet_files[:10]:
        data = z.read(file).decode('utf-8', 'replace')
        print('---', file, 'len', len(data), 'row tags', data.count('<row '), 'cell tags', data.count('<c '))
        print(data[:1200])
        print()
