import { DeviceMotion } from 'expo-sensors';
import type { DeviceMotionMeasurement } from 'expo-sensors/build/DeviceMotion';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [motionData, setMotionData] = useState<DeviceMotionMeasurement | null>(null);
  const [subscription, setSubscription] = useState<ReturnType<typeof DeviceMotion.addListener> | null>(null);

  const _subscribe = () => {
    setSubscription(
      DeviceMotion.addListener(data => {
        setMotionData(data);
      })
    );
    DeviceMotion.setUpdateInterval(50); // Update every 500ms
  };

  const _unsubscribe = () => {
    subscription?.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return _unsubscribe;
  }, []);

  const format = (label: string, value: any) => (
    <Text style={styles.text}>
      {label}: {value !== undefined && value !== null ? value.toFixed(3) : 'N/A'}
    </Text>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>📱Piano bb</Text>

      {motionData ? (
        <>
          <Text style={styles.section}>Acceleration (w/o gravity)</Text>
          <Text style={styles.section}>Value</Text>
          {format('alpha (x)', motionData.rotation?.gamma)}
          {format('beta (y)', motionData.rotation?.beta)}
          
        </>
      ) : (
        <Text style={styles.text}>Waiting for motion data...</Text>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text>{subscription ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    fontSize: 14,
    marginVertical: 2,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
});
