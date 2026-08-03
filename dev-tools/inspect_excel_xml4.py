import zipfile
from pathlib import Path

p = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
with zipfile.ZipFile(p) as z:
    print('sheet1')
    data = z.read('xl/worksheets/sheet1.xml').decode('utf-8', 'replace')
    print('count <t>:', data.count('<t>'))
    print(data[:4000])
    print('---sheet37---')
    data2 = z.read('xl/worksheets/sheet37.xml').decode('utf-8', 'replace')
    print('count <t>:', data2.count('<t>'))
    print(data2[:4000])
