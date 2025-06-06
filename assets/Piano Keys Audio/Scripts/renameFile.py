import os

filePath = os.getcwd()

keyNames = [
    'C1','D1','E1','F1','G1','A1','B1',
    'C2','D2','E2','F2','G2','A2','B2',
    'C3','D3','E3','F3','G3','A3','B3',
]

fileNums = [
    28, 30, 32, 33, 35, 37, 39,
    40, 42, 44, 45, 47, 49, 51,
    52, 54, 56, 57, 59, 61, 63
] 

for key, num in zip(keyNames, fileNums):
    oldName = f"{num}.mp3"
    newName = f"{key}.mp3"
    if os.path.exists(oldName):
        print(f"Renaming {oldName} → {newName}")
        os.rename(oldName, newName)
    else:
        print(f"Missing file: {oldName}")




    

