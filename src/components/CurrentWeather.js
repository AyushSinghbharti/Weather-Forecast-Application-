import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={75} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.HighLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 4</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.discription}>It's Sunny</Text>
        <Text style={styles.message}>It's Perfect T-shit Weather</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
    marginTop: 32,
    paddingTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  HighLowWrapper: {
    flexDirection: 'row',
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: 10,
    padding: 5,
  },
  discription: {
    fontSize: 40,
  },
  message: {
    fontSize: 25,
  }
});

export default CurrentWeather;