from pathlib import Path
import zipfile
import re

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
print('path exists', path.exists())
with zipfile.ZipFile(path) as z:
    sheets = sorted([name for name in z.namelist() if name.startswith('xl/worksheets/sheet')])
    print('sheets', len(sheets), sheets[:10])
    for name in sheets[:10]:
        data = z.read(name).decode('utf-8', 'replace')
        row_tags = re.findall(r'<row[^>]*r="(\d+)"[^>]*>', data)
        row_count = len(row_tags)
        cell_tags = re.findall(r'<c[^>]*r="([^\"]+)"[^>]*>', data)
        print('===', name, 'row_tags', row_count, 'cell_tags', len(cell_tags))
        for row_tag in row_tags[:10]:
            pass
        if row_count:
            print(data[:1000])
        print()
