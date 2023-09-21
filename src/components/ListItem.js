import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';
import moment from 'moment/moment';

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props;
    const { item, date, temp, dateTimeWrapper } = styles;
    return (
        <View style={[item, { backgroundColor: weatherType[condition].backgroundColor }]}>
            <Feather name={weatherType[condition]?.icon} size={65} color={'white'} />
            <View>
                <View style={styles.dateTimeWrapper}>
                    <Text style={date}>{moment(dt_txt).format('dddd')} </Text>
                    <Text style={date}>{moment(dt_txt).format('h:mm:ss a')} </Text>
                </View>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        margin: 10,
        backgroundColor: 'pink',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    dateTimeWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    date: {
        fontWeight: 'bold',
        color: 'white',
        padding: 5,
        marginLeft: 10,
    },
    temp: {
        fontWeight: 'bold',
        color: 'white',
        padding: 2,
        margin: 2,
    },
});

export default ListItem;