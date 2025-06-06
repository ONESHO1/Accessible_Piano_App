import os
import requests

filePath = os.getcwd()
# print(filePath)


for key in range(28, 64):
    print(f"Downloading KEY{key}")
    url = f'https://www.musicca.com/files/audio/tools/piano/{key}.mp3'
    file = requests.get(url)
    
    with open(f"{key}.mp3", 'wb') as f:
        f.write(file.content)

