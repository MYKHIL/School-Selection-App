from pathlib import Path
import zipfile
import xml.etree.ElementTree as ET

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
with zipfile.ZipFile(path) as z:
    for i, name in enumerate(sorted([n for n in z.namelist() if n.startswith('xl/worksheets/sheet')])):
        if i >= 5:
            break
        data = z.read(name)
        root = ET.fromstring(data)
        ns = {'x': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
        rows = root.findall('x:sheetData/x:row', ns)
        print(name, 'rows', len(rows))
        for row in rows[:10]:
            r = row.attrib.get('r')
            cells = []
            for c in row.findall('x:c', ns):
                ref = c.attrib.get('r')
                t = c.attrib.get('t')
                v = c.find('x:v', ns)
                isel = c.find('x:is', ns)
                if v is not None:
                    cells.append((ref, t, v.text))
                elif isel is not None:
                    text_elems = isel.findall('.//x:t', ns)
                    cells.append((ref, t, ''.join(tel.text or '' for tel in text_elems)))
                else:
                    cells.append((ref, t, None))
            print(' row', r, cells)
        print('---')
