from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
ns = {'x': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
with ZipFile(path) as archive:
    for sheet_number in range(37, 43):
        root = ET.fromstring(archive.read(f'xl/worksheets/sheet{sheet_number}.xml'))
        print(f'--- SHEET {sheet_number} ---')
        for row_number in range(4, 11):
            row = root.find(f"x:sheetData/x:row[@r='{row_number}']", ns)
            values = []
            if row is not None:
                for cell in row.findall('x:c', ns):
                    inline = cell.find('x:is', ns)
                    value = cell.find('x:v', ns)
                    text = ''.join(inline.itertext()).strip() if inline is not None else (value.text if value is not None else '')
                    if text:
                        values.append(f"{cell.get('r')}={text}")
            print(f'row {row_number}:', ' | '.join(values))
