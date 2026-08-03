import zipfile
from pathlib import Path

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
keywords = ['9060400','Ashanti','Upper','Senior High','Girls','Boys','Ahafo','Tamale']
with zipfile.ZipFile(path) as z:
    for name in sorted(fn for fn in z.namelist() if fn.startswith('xl/worksheets/')):
        raw = z.read(name).decode('utf-8','replace')
        hits = [kw for kw in keywords if kw in raw]
        if hits:
            print(name, 'hits', hits)
