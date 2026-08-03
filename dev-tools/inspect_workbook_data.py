from pathlib import Path
import zipfile

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
keywords = ['GHANA', 'SCHOOL', 'TAKORADI', 'ACC', 'BOLGA', 'WA', 'ECONOMICS', 'PROGRAM', 'REGION', 'DISTRICT', 'COLLEGE', 'REGISTER']
with zipfile.ZipFile(path, 'r') as z:
    sheets = [n for n in z.namelist() if n.startswith('xl/worksheets/sheet')]
    for name in sheets:
        data = z.read(name).decode('utf-8', errors='ignore')
        upper = data.upper()
        if any(k in upper for k in keywords):
            print('MATCH in', name)
            lines = upper.splitlines()
            for i, line in enumerate(lines[:120], start=1):
                if any(k in line for k in keywords):
                    print(i, line)
            print('---')
