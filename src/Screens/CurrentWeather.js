import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = () => {
  const { wrapper,
    container,
    temp,
    feels,
    HighLowWrapper,
    highLow,
    bodyWrapper,
    discription,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 4'}
          containerStyle={HighLowWrapper}
          messageOneStyle={highLow}
          messageTwoStyle={highLow}
        />
      </View>
      <RowText
        messageOne={"It's sunny"}
        messageTwo={weatherType['ThunderStrom'].message}
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
    backgroundColor: 'pink',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 50,
    paddingBottom: 7.5,
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
    marginHorizontal: 10,
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