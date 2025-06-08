import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');
interface SliderProps {
  betaValue: number;
}

export default function SliderComponent({ betaValue }: SliderProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.rotatedWrapper, { width: screenHeight * 0.8 }]}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={1 - betaValue} // invert so top = max
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          thumbTintColor="#000000"
          step={0.5}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor : '#000000',
  },
  rotatedWrapper: {
    transform: [{ rotate: '-90deg' }],
    // width: '100%', // becomes vertical height after rotate
    height: 40,
    // backgroundColor : '#000000',
  },
  slider: {
    width: '100%',
    height: '100%',
    // backgroundColor : '#000000',
  },
});


// stop ctrl z