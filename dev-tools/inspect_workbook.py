from pathlib import Path
import zipfile
import xml.etree.ElementTree as ET

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
with zipfile.ZipFile(path, 'r') as z:
    sheets = [n for n in z.namelist() if n.startswith('xl/worksheets/sheet')]
    print('worksheet files=', sheets)
    for name in sheets:
        data = z.read(name)
        text = data.decode('utf-8', errors='ignore')
        count = text.count('<c ') + text.count('<c>')
        print(f'{name} cells={count} len={len(data)}')
        if count > 0:
            root = ET.fromstring(text)
            rows = root.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheetData/{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row')
            print(' rows=', len(rows))
            for row in rows[:10]:
                values = []
                for c in row.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
                    v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
                    t = c.get('t')
                    values.append((c.get('r'), t, v.text if v is not None else None))
                print('  row', row.get('r'), values)
            break
