import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StepValueProps {
  betaValue: number;
}

export default function StepValue({ betaValue }: StepValueProps) {
  // Original calculation: Math.round((1 - betaValue) / 0.5) + 1
  // If betaValue goes from 0 to 1:
  // When betaValue = 0, (1 - 0) / 0.5 + 1 = 2 + 1 = 3 (Top)
  // When betaValue = 0.5, (1 - 0.5) / 0.5 + 1 = 1 + 1 = 2 (Middle)
  // When betaValue = 1, (1 - 1) / 0.5 + 1 = 0 + 1 = 1 (Bottom)
  const stepNumber = Math.round((1 - betaValue) / 0.5) + 1;

  return (
    <View>
      <View>
        <Text>
          Step {stepNumber}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});