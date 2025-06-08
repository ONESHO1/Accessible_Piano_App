import React from 'react';
import { StyleSheet, View } from 'react-native';
import KeyComponent from './KeyComponent';
import {baseNotes} from '../constants/constants'

interface pianoComponentProps {
  betaValue: number;
}

export default function PianoComponent({ betaValue }: pianoComponentProps) {
  return (
    <View style={styles.pianoStyle}>
      {baseNotes.map((note) => (
        <KeyComponent key={note} note={note} betaValue={betaValue} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  pianoStyle: {
    position: 'relative',
  }
});