from pathlib import Path
import zipfile
import xml.etree.ElementTree as ET

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
with zipfile.ZipFile(path, 'r') as z:
    data = z.read('xl/worksheets/sheet18.xml').decode('utf-8', errors='ignore')
    root = ET.fromstring(data)
    ns = {'x': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    sheetData = root.find('x:sheetData', ns)
    def cell_text(c):
        if c is None:
            return None
        t = c.get('t')
        if t == 'inlineStr':
            is_elem = c.find('x:is', ns)
            if is_elem is None:
                return None
            parts = []
            for tnode in is_elem.iterfind('.//x:t', ns):
                parts.append(tnode.text or '')
            return ''.join(parts)
        v = c.find('x:v', ns)
        return v.text if v is not None else None
    for row in sheetData.findall('x:row', ns)[:40]:
        cells = []
        for c in row.findall('x:c', ns):
            cells.append((c.get('r'), cell_text(c)))
        print(row.get('r'), cells)
