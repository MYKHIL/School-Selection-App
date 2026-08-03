from pathlib import Path
import zipfile
import xml.etree.ElementTree as ET

path = Path('scripts/FINAL 2026 SENIOR HIGH SCHOOL REGISTER.xlsx')
with zipfile.ZipFile(path, 'r') as z:
    print('files count', len(z.namelist()))
    for name in z.namelist():
        if name.startswith('xl/') and (name.endswith('.xml') or name.endswith('.rels')):
            print(name)
    if 'xl/sharedStrings.xml' in z.namelist():
        data = z.read('xl/sharedStrings.xml').decode('utf-8', errors='ignore')
        root = ET.fromstring(data)
        print('sharedStrings count', len(root))
        print('first 20 shared strings:')
        for i, si in enumerate(root[:20], start=1):
            text=''
            for t in si.iter('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t'):
                text += t.text or ''
            print(i, repr(text))
            if i >= 20:
                break
    else:
        print('no sharedStrings.xml')
