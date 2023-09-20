import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
    const {container, textTheme} = styles;
    const { iconName, iconColor, iconSize, bodyText, bodyTextStyle } = props;
    return (
        <View style={container}>
            <Feather name={iconName} size={iconSize} color={iconColor} />
            <Text style={[textTheme, bodyTextStyle]}> {bodyText} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textTheme: {
        fontWeight: 'bold',
    },
})

export default IconText;