import pandas as pd
path = 'Img/motasp.xlsx'
xl = pd.ExcelFile(path)
print('sheets:', xl.sheet_names)
for sheet in xl.sheet_names:
    df = xl.parse(sheet)
    print('\n--- SHEET:', sheet, '---')
    print(df.head(50).to_string(index=False))
