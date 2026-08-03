from pathlib import Path
import zipfile
import xml.etree.ElementTree as ET

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
for name in ['sheet3.xml', 'sheet7.xml', 'sheet13.xml', 'sheet18.xml']:
    print('===', name, '===')
    with zipfile.ZipFile(path, 'r') as z:
        data = z.read('xl/worksheets/' + name).decode('utf-8', errors='ignore')
        root = ET.fromstring(data)
        ns = {'x': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
        sheetData = root.find('x:sheetData', ns)
        def cell_text(c):
            t = c.get('t')
            if t == 'inlineStr':
                is_elem = c.find('x:inlineStr', ns)
                if is_elem is None:
                    return None
                texts = [tn.text or '' for tn in is_elem.iterfind('.//x:t', ns)]
                return ''.join(texts).strip()
            v = c.find('x:v', ns)
            return v.text if v is not None else None
        for row in sheetData.findall('x:row', ns)[:20]:
            cells = [(c.get('r'), cell_text(c)) for c in row.findall('x:c', ns)]
            print(row.get('r'), cells)
    print()