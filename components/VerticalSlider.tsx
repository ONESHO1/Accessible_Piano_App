import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';

const { height } = Dimensions.get('window');

interface SliderProps {
  betaValue: number;
}

/**
 * Slider component (renamed from VerticalSlider to avoid confusion)
 * Displays a vertical slider controlled by the betaValue.
 */
export default function SliderComponent({ betaValue }: SliderProps) {
  return (
    <View style={styles.verticalSliderContainer}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={1 - betaValue} // invert so top = max
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        thumbTintColor="#000000"
        step={0.50}
        // These props are typically for horizontal sliders.
        // For vertical interaction, the rotation handles the visual.
        // onValueChange={(value) => { /* If you want manual control, handle here */ }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  verticalSliderContainer: {
    transform: [{ rotate: '-90deg' }],
    width: height * 0.85, // Use a percentage of screen height for consistency
    height: 40, // Fixed height for the rotated container
    justifyContent: 'center',
    // backgroundColor: '#FF0000' // Uncomment for debugging background
  },
  slider: {
    width: '100%', // Slider takes full width of its rotated container
    height: 100, // Slider takes full height of its rotated container
    // backgroundColor: '#00FF00' // Uncomment for debugging background
  },
});