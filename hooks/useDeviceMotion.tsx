import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { DeviceMotion } from 'expo-sensors';

export const useDeviceMotion = (updateInterval: number = 10) => {
  const [betaValue, setBetaValue] = useState<number>(0);

  useEffect(() => {
    StatusBar.setHidden(true, 'fade');
    DeviceMotion.setUpdateInterval(updateInterval);
    const subscription = DeviceMotion.addListener((motionData) => {
      const beta = motionData.rotation?.beta ?? 0;

      // Clamp and normalize beta [0, 1]
      const clamped = Math.max(0, Math.min(beta, 1));
      const normalized = clamped;
      setBetaValue(normalized);
    });

    return () => subscription.remove();
  }, [updateInterval]);

  return betaValue;
};