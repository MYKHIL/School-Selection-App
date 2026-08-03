import pdfplumber
from pathlib import Path
import re
path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.pdf')
with pdfplumber.open(path) as pdf:
    print('pages', len(pdf.pages))
    for page_num in range(1, min(6, len(pdf.pages)) + 1):
        page = pdf.pages[page_num - 1]
        text = page.extract_text() or ''
        print('\n--- PAGE', page_num, '---')
        lines = [line for line in text.splitlines() if line.strip()]
        for i, line in enumerate(lines[:80], 1):
            print(f'{i:02d}: {line}')
        # show lines containing codes or type words
        print('\n lines with code or type terms:')
        for line in lines[:200]:
            if re.search(r'\b\d{7}\b|\b(SHS|SHTS|STEM|TVET|TYPE|SCH\. TYPE|SCHOOL TYPE)\b', line, re.I):
                print('>>', line)
        if page_num == 1:
            print('\nword positions sample:')
            for word in page.extract_words(x_tolerance=2, y_tolerance=2)[:100]:
                if re.search(r'\d{7}|SHS|SHTS|STEM|TVET|TYPE|STATUS', word.get('text',''), re.I):
                    print(word)
