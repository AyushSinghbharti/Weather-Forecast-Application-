import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, StatusBar, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';


const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 15:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 18:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    },
]

const Item = (props) => {
    const { dt_txt, min, max, condition } = props;
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={75} color={'black'} />
            <Text style={styles.date}>{dt_txt} </Text>
            <Text style={styles.temp}>{max} </Text>
            <Text style={styles.temp}>{min} </Text>
        </View>
    )
}

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <Item
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )

    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Weather!!</Text>
            <Image />
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        marginTop: StatusBar.currentHeight || 30,
        padding: 5,
        backgroundColor: 'grey'
    },
    item: {
        padding: 10,
        margin: 10,
        backgroundColor: 'pink',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date: {
        padding: 5,
        marginLeft: 10,
    },
    temp: {
        padding: 2,
        margin: 2,
    }
});

export default UpcomingWeather;