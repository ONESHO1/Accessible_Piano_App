import os

key = 28
for i in range(3):
    for j in range(1, 13):
        if j in [2,4,7,9,11]:
            # print(key)
            os.remove(f"{key}.mp3")
        key += 1

    
    
'''
 29 31    34 36 38
28 30 32 33 35 37 39


2 4 7 9 11
'''