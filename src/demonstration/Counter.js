import {react, useState} from "react";
import {View, StyleSheet, Text, Button} from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);
    return(
        <View style={styles.container}>
            <Text> {`count: ${count}`} </Text>
            <Button color={'red'} title="Increse Button" onPress={() => setCount(count+1)} />
            <Button color={'green'} title="Decrese Button" onPress={() => setCount(count-1)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Counter;