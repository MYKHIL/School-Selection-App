from pathlib import Path
import zipfile
import xml.etree.ElementTree as ET

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
with zipfile.ZipFile(path, 'r') as z:
    workbook_xml = z.read('xl/workbook.xml').decode('utf-8', errors='ignore')
    root = ET.fromstring(workbook_xml)
    ns = {'d': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    sheets = root.findall('d:sheets/d:sheet', ns)
    print('Workbook sheets:')
    for s in sheets:
        print('name=', s.get('name'), 'sheetId=', s.get('sheetId'), 'r:id=', s.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id'))

    rels_xml = z.read('xl/_rels/workbook.xml.rels').decode('utf-8', errors='ignore')
    rels_root = ET.fromstring(rels_xml)
    print('\nRelationships:')
    for r in rels_root.findall('Relationship'):
        print('Id=', r.get('Id'), 'Target=', r.get('Target'))

    print('\nInspect sheet18 rows 1-50:')
    data = z.read('xl/worksheets/sheet18.xml').decode('utf-8', errors='ignore')
    sheet_root = ET.fromstring(data)
    sheetData = sheet_root.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheetData')
    for row in sheetData.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row')[:50]:
        rnum = row.get('r')
        cells = []
        for c in row.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
            ref = c.get('r')
            t = c.get('t')
            v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            if v is not None:
                cells.append((ref, t, v.text))
            else:
                cells.append((ref, t, None))
        print(rnum, cells)
