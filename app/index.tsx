import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import SensorDataReader from '../components/SensorDataReader';
import StepValue from '../components/StepDisplay';
import SliderComponent from '../components/VerticalSlider'; // Renamed to avoid conflict with @react-native-community/slider

const { height } = Dimensions.get('window');

export default function App() {
  const [betaValue, setBetaValue] = useState(0);

  return (
    <View style={styles.container}>
      {/* SensorDataReader will manage the sensor subscription and update betaValue */}
      <SensorDataReader onNewBetaValue={setBetaValue} />

      <View style={styles.sliderWrapper}>
        {/* StepDisplay will show the calculated step number */}
        <StepValue betaValue={betaValue} />

        {/* SliderComponent will render the actual slider */}
        <SliderComponent betaValue={betaValue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000' // Uncomment for debugging background
  },
  sliderWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000000' // Uncomment for debugging background
  },
});