import React from 'react';
import { StyleSheet, TextInput, View, } from 'react-native';

const CustomInput = ({ type, placeHolder, onChange }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                keyboardType={type ? type : 'default'}
                placeholder={placeHolder}
                onChangeText={(e) => { onChange(e) }}
            />
        </View>
    );
}

export default CustomInput;

const styles = StyleSheet.create({
    inputContainer: {
        width: '95%',
        borderColor: 'black',
        borderWidth: 0.5,
        marginTop: 20,
        // borderRadius:10
    },
    input: {
        width: '90%',
        marginHorizontal: '5%',
    },
});
