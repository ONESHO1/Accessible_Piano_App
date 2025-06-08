import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import SensorDataReader from '../components/SensorDataReader';
import StepValue from '../components/StepDisplay';
import SliderComponent from '../components/VerticalSlider';
import PianoComponent from '../components/PianoComponent';

const { height } = Dimensions.get('window');

export default function App() {
  const [betaValue, setBetaValue] = useState(0);

  return (
    <View style={styles.container}>
      <SensorDataReader onNewBetaValue={setBetaValue}></SensorDataReader>
      {/* <SliderComponent betaValue={betaValue}></SliderComponent> */}
      <View style={styles.pianoContainer}>
        <PianoComponent betaValue={betaValue}></PianoComponent>
      </View>

      <View style={styles.sliderContainer}>
        <SliderComponent betaValue={betaValue}></SliderComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor : '#000000',
  },
  pianoContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor : '#000000',
  },
  sliderContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',

    // backgroundColor : '#000000',
  }
});