import re
from pathlib import Path
from pypdf import PdfReader

pdf_path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.pdf')
reader = PdfReader(str(pdf_path))
print('pages', len(reader.pages))
for i, page in enumerate(reader.pages, 1):
    txt = page.extract_text() or ''
    codes = re.findall(r'\b\d{7}\b', txt)
    if codes:
        print('PAGE', i, 'codes', len(codes), 'first', codes[:10])
        lines = [ln.strip() for ln in txt.splitlines() if re.search(r'\d{7}', ln)]
        if lines:
            print('sample line:', lines[0][:400])
        print('---')
