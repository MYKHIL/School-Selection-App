import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ns = {'d': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
with zipfile.ZipFile(path) as z:
    raw = z.read('xl/worksheets/sheet14.xml')
    root = ET.fromstring(raw)
    rows = root.findall('.//d:row', ns)
    for row in rows:
        r = int(row.attrib.get('r', '0'))
        if r in [6,7,8]:
            vals = []
            for c in row.findall('d:c', ns):
                addr = c.attrib.get('r')
                t = c.attrib.get('t')
                val = None
                if t == 'inlineStr':
                    val = ''.join((el.text or '') for el in c.findall('.//d:t', ns))
                else:
                    v = c.find('d:v', ns)
                    val = v.text if v is not None else None
                vals.append((addr, val))
            print('row', r, vals)
