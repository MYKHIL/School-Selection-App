from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
ns = {'x': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
with ZipFile(path) as archive:
    for sheet_number in [1, 37, 38]:
        filename = f'xl/worksheets/sheet{sheet_number}.xml'
        root = ET.fromstring(archive.read(filename))
        print(f'--- SHEET {sheet_number} ---')
        merged = [node.get('ref') for node in root.findall('x:mergeCells/x:mergeCell', ns)]
        print('merged_ranges', merged[:30])
        for row in root.findall('x:sheetData/x:row', ns):
            row_number = int(row.get('r', '0'))
            if row_number > 14:
                break
            values = []
            for cell in row.findall('x:c', ns):
                inline = cell.find('x:is', ns)
                text = ''.join(inline.itertext()).strip() if inline is not None else ''
                value = cell.find('x:v', ns)
                values.append((cell.get('r'), text or (value.text if value is not None else '')))
            print(row_number, values[:30])
