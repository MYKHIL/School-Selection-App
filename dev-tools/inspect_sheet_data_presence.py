from pathlib import Path
import zipfile
import xml.etree.ElementTree as ET

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
with zipfile.ZipFile(path, 'r') as z:
    sheets = [n for n in z.namelist() if n.startswith('xl/worksheets/sheet')]
    ns = {'x': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    for name in sheets:
        data = z.read(name).decode('utf-8', errors='ignore')
        root = ET.fromstring(data)
        sheetData = root.find('x:sheetData', ns)
        if sheetData is None:
            continue
        rows = sheetData.findall('x:row', ns)
        nonempty = 0
        for row in rows:
            for c in row.findall('x:c', ns):
                v = c.find('x:v', ns)
                inline = c.find('x:inlineStr', ns)
                if v is not None or inline is not None:
                    nonempty += 1
                    break
        if nonempty > 0:
            print(name, 'rows=', len(rows), 'nonempty=', nonempty)
