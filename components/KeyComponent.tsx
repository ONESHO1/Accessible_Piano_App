import { Audio } from 'expo-av';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { soundFiles } from '../constants/constants';

interface noteProps {
  note: string;
  betaValue: number
}

const blackKeyOffsets: { [key: string]: number } = {
  'DF': 0.7,
  'EF': 1.7,
  'GF': 3.7,
  'AF': 4.7,
  'BF': 5.7,
};

const whiteKeyHeight = 90;
const blackKeyHeight = 50;

export default function KeyComponent({note, betaValue}: noteProps) {
  const stepNumber = Math.round((1 - betaValue) / 0.5) + 1;
  const isBlackKey = note.length > 1;

  const style = isBlackKey
    ? [styles.KeyStyleFlat, { top: blackKeyOffsets[note] * whiteKeyHeight }]
    : styles.KeyStyle;

  // const playSound = () => {
  //   console.log(`Pressed key: ${note}, Step: ${stepNumber}`);
  // }

  const playSound = async () => {
    const key = `${note}${stepNumber}`;
    try {
      const { sound } = await Audio.Sound.createAsync(soundFiles[key]);
      await sound.playAsync();

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          sound.unloadAsync();
        }
      });

      console.log(`Playing note: ${key}`);
    } catch (error) {
      console.error(`Error playing ${key}.mp3:`, error);
    }
  };

  return (
    // ----

    <TouchableOpacity onPressIn={playSound} activeOpacity={0.1} style={style}>
      {/* <Text style={styles.keyTextStyle}>
        {note} {stepNumber}
      </Text> */}
    </TouchableOpacity>

    // ----

    // <View style={style}>
    //   <Text style={styles.keyTextStyle}>
    //     {note} {stepNumber}
    //   </Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  KeyStyle: { 
    width: 280,
    height: whiteKeyHeight,
    borderColor: '#000000',
    borderWidth: 1.5,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'relative',
    zIndex: 1
  },
  KeyStyleFlat: {
    left: 120,
    width: 160,
    height: blackKeyHeight,
    backgroundColor: '#000000',
    position: 'absolute',
    zIndex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  keyTextStyle: {
    fontSize: 16,               // optional: improves visibility
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  }
});