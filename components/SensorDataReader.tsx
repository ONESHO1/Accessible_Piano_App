import React, { useEffect } from 'react';
import { useDeviceMotion } from '../hooks/useDeviceMotion';

interface SensorDataReaderProps {
  onNewBetaValue: (value: number) => void;
}

export default function SensorDataReader({ onNewBetaValue }: SensorDataReaderProps) {
  const betaValue = useDeviceMotion();

  // Call the callback whenever betaValue changes
  useEffect(() => {
    if (onNewBetaValue) {
      onNewBetaValue(betaValue);
    }
  }, [betaValue, onNewBetaValue]); // Depend on betaValue and onNewBetaValue

  return null; // This component doesn't render any UI
}