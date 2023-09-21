import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {
  const { wrapper,
    container,
    tempStyle,
    feels,
    HighLowWrapper,
    highLow,
    bodyWrapper,
    discription,
    message,
  } = styles;

  console.log(weatherData);

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyle}>{ temp } ℃</Text>
        <Text style={feels}>Feels like {feels_like} ℃</Text>
        <RowText
          messageOne={`High: ${temp_max}°C`} 
          messageTwo={`low: ${temp_min}°C`}
          containerStyle={HighLowWrapper}
          messageOneStyle={highLow}
          messageTwoStyle={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyle={bodyWrapper}
        messageOneStyle={discription}
        messageTwoStyle={message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 35,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  tempStyle: {
    color: 'white',
    fontSize: 50,
    paddingBottom: 7.5,
  },
  feels: {
    color: 'white',
    fontSize: 30,
  },
  HighLowWrapper: {
    flexDirection: 'row',
  },
  highLow: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 10,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: 10,
    padding: 5,
  },
  discription: {
    color: 'white',
    fontSize: 43,
  },
  message: {
    color: 'white',
    fontSize: 25,
  }
});

export default CurrentWeather;