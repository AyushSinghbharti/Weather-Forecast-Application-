import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props;
    const { item, date, temp } = styles;
    return (
        <View style={item}>
            <Feather name={'sun'} size={75} color={'black'} />
            <Text style={date}>{dt_txt} </Text>
            <Text style={temp}>{max} </Text>
            <Text style={temp}>{min} </Text>
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
    },
});

export default ListItem;