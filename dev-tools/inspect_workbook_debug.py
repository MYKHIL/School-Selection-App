import openpyxl
import re
from pathlib import Path

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
wb = openpyxl.load_workbook(path, data_only=True, read_only=True)

for idx in [37, 38, 39, 40, 41, 42, 52]:
    ws = wb.worksheets[idx-1]
    print(f'=== SHEET {idx} {ws.title} ===')
    for r in range(1, 12):
        row = list(ws.iter_rows(min_row=r, max_row=r, values_only=True))[0]
        row = [str(c).strip() if c is not None else '' for c in row]
        if any(row):
            print(r, row[:30])
    print()
