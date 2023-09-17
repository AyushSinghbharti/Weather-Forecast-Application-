import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CurrentWeather from './src/components/CurrentWeather';
import UpcomingWeather from './src/components/UpcomingWeather';

const App = () => {
  return (
    <View style={styles.main}>
      <UpcomingWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
});

export default App;