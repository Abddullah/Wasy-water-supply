
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, } from 'react-native';
import CustomInput from '../../components/input';
import CustomButton from '../../components/button';
import AntDesign from 'react-native-vector-icons/AntDesign';
const logo = require('../../assets/logo.png')

export default function ForgotPassword({ navigation }) {
    const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview} style={{ width: '95%' }}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" color="#000000" size={30} />
                </TouchableOpacity>
                <Image resizeMode='contain' source={logo} style={styles.imageLogo} />
                <View style={styles.brandNameContainer}>
                    <Text style={styles.brandName}>Easy Water Supply</Text>
                    <Text >Neat and clean sweet water</Text>
                </View>
                <CustomInput type='email-address' placeHolder='Email' onChange={setEmail} />
                <CustomButton text='Reset Password' />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    scrollview: {
        paddingBottom: 200,
        flex: 1,
        alignItems: 'center'
    },
    imageLogo: {
        height: 300,
        width: 300,
        marginTop: 50
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
    newToSupplyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    newToSupplyText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    backButton: {
        width: '95%',
        marginTop: 20
    }
})
