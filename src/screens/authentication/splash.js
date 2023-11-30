
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator,  } from 'react-native';
const logo = require('../../assets/logo.png')

function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => navigation.navigate('SignIn'), 1000)
    }, [])
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' source={logo} style={styles.imageLogo} />
            <View style={styles.brandNameContainer}>
                <Text style={styles.brandName}>Easy Water Supply</Text>
                <Text >Neat and clean sweet water</Text>
            </View>
            <ActivityIndicator color={'#3460A9'} size={50} top={20} />
        </View>
    );
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue'
    },
    imageLogo: {
        height: 300,
        width: 300,
    },
    brandName: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#3460A9',
    },
    brandNameContainer: {
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
})
