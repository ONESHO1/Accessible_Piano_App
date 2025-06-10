const baseNotes = [
    'C', 'DF', 'D', 'EF',
    'E', 'F', 'GF', 'G',
    'AF', 'A', 'BF', 'B'
]

const soundFiles: { [key: string]: any } = {
  // Step 1
  'C1': require('../assets/pianoKeysAudio/C1.mp3'),
//   'DF1': require('../assets/pianoKeysAudio/DF1.mp3'),
  'D1': require('../assets/pianoKeysAudio/D1.mp3'),
//   'EF1': require('../assets/pianoKeysAudio/EF1.mp3'),
  'E1': require('../assets/pianoKeysAudio/E1.mp3'),
  'F1': require('../assets/pianoKeysAudio/F1.mp3'),
//   'GF1': require('../assets/pianoKeysAudio/GF1.mp3'),
  'G1': require('../assets/pianoKeysAudio/G1.mp3'),
//   'AF1': require('../assets/pianoKeysAudio/AF1.mp3'),
  'A1': require('../assets/pianoKeysAudio/A1.mp3'),
//   'BF1': require('../assets/pianoKeysAudio/BF1.mp3'),
  'B1': require('../assets/pianoKeysAudio/B1.mp3'),

  // Step 2
  'C2': require('../assets/pianoKeysAudio/C2.mp3'),
//   'DF2': require('../assets/pianoKeysAudio/DF2.mp3'),
  'D2': require('../assets/pianoKeysAudio/D2.mp3'),
//   'EF2': require('../assets/pianoKeysAudio/EF2.mp3'),
  'E2': require('../assets/pianoKeysAudio/E2.mp3'),
  'F2': require('../assets/pianoKeysAudio/F2.mp3'),
//   'GF2': require('../assets/pianoKeysAudio/GF2.mp3'),
  'G2': require('../assets/pianoKeysAudio/G2.mp3'),
//   'AF2': require('../assets/pianoKeysAudio/AF2.mp3'),
  'A2': require('../assets/pianoKeysAudio/A2.mp3'),
//   'BF2': require('../assets/pianoKeysAudio/BF2.mp3'),
  'B2': require('../assets/pianoKeysAudio/B2.mp3'),

  // Step 3
  'C3': require('../assets/pianoKeysAudio/C3.mp3'),
//   'DF3': require('../assets/pianoKeysAudio/DF3.mp3'),
  'D3': require('../assets/pianoKeysAudio/D3.mp3'),
//   'EF3': require('../assets/pianoKeysAudio/EF3.mp3'),
  'E3': require('../assets/pianoKeysAudio/E3.mp3'),
  'F3': require('../assets/pianoKeysAudio/F3.mp3'),
//   'GF3': require('../assets/pianoKeysAudio/GF3.mp3'),
  'G3': require('../assets/pianoKeysAudio/G3.mp3'),
//   'AF3': require('../assets/pianoKeysAudio/AF3.mp3'),
  'A3': require('../assets/pianoKeysAudio/A3.mp3'),
//   'BF3': require('../assets/pianoKeysAudio/BF3.mp3'),
  'B3': require('../assets/pianoKeysAudio/B3.mp3'),
};

export {baseNotes, soundFiles};