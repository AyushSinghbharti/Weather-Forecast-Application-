import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CurrentWeather from './src/Screens/CurrentWeather';
import UpcomingWeather from './src/Screens/UpcomingWeather';
import City from './src/Screens/City';
import RowText from './src/components/RowText';

const App = () => {
  return (
    <View style={styles.main}>
      <CurrentWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
});

export default App;