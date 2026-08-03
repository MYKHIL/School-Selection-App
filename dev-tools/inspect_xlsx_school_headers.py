from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET
import re

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
ns = {'x': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
with ZipFile(path) as archive:
    for sheet_number in range(1, 53):
        filename = f'xl/worksheets/sheet{sheet_number}.xml'
        root = ET.fromstring(archive.read(filename))
        rows = root.findall('x:sheetData/x:row', ns)
        code_rows = []
        for row in rows:
            values = []
            for cell in row.findall('x:c', ns):
                inline = cell.find('x:is', ns)
                value = cell.find('x:v', ns)
                text = ''.join(inline.itertext()).strip() if inline is not None else (value.text if value is not None else '')
                values.append(text)
            if any(re.fullmatch(r'\d{7}', value or '') for value in values):
                code_rows.append(int(row.get('r', '0')))
        if not code_rows:
            continue
        print(f'--- SHEET {sheet_number} code_rows={code_rows[0]}..{code_rows[-1]} ---')
        for row_number in range(max(1, code_rows[0] - 4), min(code_rows[0] + 4, code_rows[-1] + 1)):
            row = root.find(f"x:sheetData/x:row[@r='{row_number}']", ns)
            values = []
            if row is not None:
                for cell in row.findall('x:c', ns):
                    inline = cell.find('x:is', ns)
                    value = cell.find('x:v', ns)
                    text = ''.join(inline.itertext()).strip() if inline is not None else (value.text if value is not None else '')
                    if text:
                        values.append(f"{cell.get('r')}={text}")
            print(f'row {row_number}:', ' | '.join(values[:25]))
