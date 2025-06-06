import Slider from '@react-native-community/slider';
import { DeviceMotion } from 'expo-sensors';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const { height } = Dimensions.get('window');

export default function App() {
  const [betaValue, setBetaValue] = useState(0);

  useEffect(() => {
    DeviceMotion.setUpdateInterval(10);
    const subscription = DeviceMotion.addListener((motionData) => {
      const beta = motionData.rotation?.beta ?? 0;

      // Clamp and normalize beta [-0.5, 1.5] -> [0, 1]
      // const clamped = Math.max(-0.5, Math.min(beta, 1.5)); // -0.5 - 1.5
      // const normalized = clamped; // 0 - 1

      const clamped = Math.max(0, Math.min(beta, 1));
      const normalized = clamped;
      setBetaValue(normalized);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.sliderWrapper}>
        {/* STEP NUMBER TEXT */}
        <View style={styles.stepTextContainer}>
          <View style={{ transform: [{ rotate: '-90deg' }] }}>
            <Text style={styles.stepText}>
              Step {Math.round((1 - betaValue) / 0.5) + 1}
            </Text>
          </View>
        </View>
        <View style={styles.verticalSliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={1- betaValue} // invert so top = max
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            thumbTintColor="#000000"
            // renderStepNumber
            step={0.50}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000'
  },
  sliderWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000000'
  },
  verticalSliderContainer: {
    transform: [{ rotate: '-90deg' }],
    width: height * 0.85,
    height: 100,
    justifyContent: 'center',
    // backgroundColor: '#000000'
  },
  slider: {
    width: '100%',
    height: 100,
    // backgroundColor: '#000000'
  },
  stepTextContainer: {
    position: 'absolute',
    top: 20,
    alignItems: 'center',
  },

  stepText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  }
});
