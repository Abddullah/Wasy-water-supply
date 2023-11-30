import React from 'react';
import { StyleSheet, Pressable, View, Text } from 'react-native';

const CustomButton = ({ text, onPress }) => {
    return (
        <Pressable style={styles.pressable} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    pressable: {
        width: '95%',
        backgroundColor: '#3460A9',
        marginTop: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
});
