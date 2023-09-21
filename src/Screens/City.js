import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from "../components/IconText";

const City = (props) => {
    // const {cityName, countryName, countryPopulation, sunRiseTime, sunSetTime} = props;
    const { container, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout, imageLayout } = styles;

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city-Background.jpg')}
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UK</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName={'user'}
                        iconColor={'white'}
                        iconSize={75}
                        bodyText={80000}
                        bodyTextStyle={populationText}
                    />
                </View>
                <View >
                    <View style={[riseSetWrapper, rowLayout]}>
                        <IconText iconName={'sunrise'} iconColor={'white'} iconSize={60} bodyText={'6:50 AM'} bodyTextStyle={riseSetText} />
                        <IconText iconName={'sunset'} iconColor={'white'} iconSize={60} bodyText={'10:00 AM'} bodyTextStyle={riseSetText} />
                    </View>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageLayout: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 30,
    },
    cityName: {
        fontSize: 40,
        fontWeight: 900,
        marginTop: 50,
    },
    countryName: {
        fontSize: 30,
        fontWeight: 700
    },
    cityText: {
        textAlign: "center",
        justifyContent: 'center',
        padding: 5,
        marginBottom: 10,
        marginHorizontal: 50,
        color: 'white',
        borderColor: 'grey',
        backgroundColor: 'pink',
        borderEndColor: 'blue',
        borderWidth: 1,
        borderRadius: 15,
        elevation: 10,
    },
    populationWrapper: {
        justifyContent: "center",
        marginTop: 30,
    },
    populationText: {
        fontSize: 30,
        marginLeft: 7.5,
        color: 'red',
        color: 'white',
        borderColor: 'grey',
        backgroundColor: 'pink',
        borderEndColor: 'blue',
        borderWidth: 1,
        borderRadius: 15,
        elevation: 10,
    },
    riseSetWrapper: {
        paddingHorizontal: 5,
        justifyContent: 'space-around',
        marginTop: 25,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default City;