import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ns = {'d': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
with zipfile.ZipFile(path) as z:
    for fname in ['xl/worksheets/sheet1.xml', 'xl/worksheets/sheet37.xml']:
        print('FILE', fname)
        raw = z.read(fname)
        root = ET.fromstring(raw)
        for row in root.findall('.//d:row', ns)[:20]:
            cells = []
            for c in row.findall('d:c', ns):
                addr = c.attrib.get('r')
                t = c.attrib.get('t')
                val = None
                if t == 'inlineStr':
                    inline = c.find('d:inlineStr', ns)
                    if inline is not None:
                        tnode = inline.find('d:t', ns)
                        if tnode is not None:
                            val = tnode.text
                else:
                    v = c.find('d:v', ns)
                    if v is not None:
                        val = v.text
                cells.append((addr, t, val))
            print('row', row.attrib.get('r'), cells)
        print('---')
