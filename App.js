import React, { useState, useEffect } from 'react';
import CurrentWeather from './src/Screens/CurrentWeather';
import UpcomingWeather from './src/Screens/UpcomingWeather';
import City from './src/Screens/City';
import Tabs from './src/components/Tabs';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location'
import { TEST_KEY } from '@env'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const Tab = createBottomTabNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  console.log(TEST_KEY);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('permission is not granted');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, [])

  if (location) {
    console.log(location);
  }
  
  if (loading) {
    return (
      <View style={styles.container} >
        <ActivityIndicator size={'extralarge'} color={'blue'} />
      </View >
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'red',
  }
})

export default App;