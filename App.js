import React, { useState, useEffect } from 'react';
import Tabs from './src/components/Tabs';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useGetWeather } from './src/hooks/useGetWeather';
import ErrorItem from './src/components/ErrorItem';

const Tab = createBottomTabNavigator();


const App = () => {
  const [loading, error, weather] = useGetWeather();

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container} >
      {error ? (
        <ErrorItem />
      ) : (<ActivityIndicator size={'extralarge'} color={'blue'} />
      )}
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red'
  }
})

export default App;