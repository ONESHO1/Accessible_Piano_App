import React, { useEffect } from 'react';
import { useDeviceMotion } from '../hooks/useDeviceMotion';

interface SensorDataReaderProps {
  onNewBetaValue: (value: number) => void;
}

/**
 * SensorDataReader component
 * This component is responsible for reading device motion data (beta value)
 * and passing it to a provided callback function. It renders nothing visually.
 */
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