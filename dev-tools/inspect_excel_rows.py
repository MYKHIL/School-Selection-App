import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ns = {'d': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')

def cell_value(cell):
    t = cell.attrib.get('t')
    if t == 'inlineStr':
        text_elems = cell.findall('.//d:t', ns)
        return ''.join((el.text or '') for el in text_elems)
    v = cell.find('d:v', ns)
    return v.text if v is not None else None

with zipfile.ZipFile(path) as z:
    for fname in ['xl/worksheets/sheet1.xml','xl/worksheets/sheet3.xml','xl/worksheets/sheet14.xml','xl/worksheets/sheet37.xml']:
        raw = z.read(fname)
        root = ET.fromstring(raw)
        rows = root.findall('.//d:row', ns)
        print('FILE', fname, 'rows', len(rows))
        for row in rows[:15]:
            vals = []
            for c in row.findall('d:c', ns):
                vals.append((c.attrib.get('r'), cell_value(c)))
            print('row', row.attrib.get('r'), vals)
        print('---')
