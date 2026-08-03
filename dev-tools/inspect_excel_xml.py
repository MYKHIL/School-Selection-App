import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
with zipfile.ZipFile(path) as z:
    for fname in ['xl/sharedStrings.xml', 'xl/worksheets/sheet1.xml', 'xl/worksheets/sheet37.xml']:
        print('FILE', fname)
        if fname not in z.namelist():
            print('  missing')
            continue
        raw = z.read(fname)
        try:
            root = ET.fromstring(raw)
        except Exception as e:
            print('  parse error', e)
            continue
        print('  root', root.tag)
        cells = root.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c')
        print('  cell count', len(cells))
        for i, cell in enumerate(cells[:20], 1):
            addr = cell.attrib.get('r')
            t = cell.attrib.get('t')
            v = cell.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            print('   ', i, addr, t, v.text if v is not None else None)
        print()
