
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, } from 'react-native';
import CustomInput from '../../components/input';
import CustomButton from '../../components/button';
import AntDesign from 'react-native-vector-icons/AntDesign';
const logo = require('../../assets/logo.png')

export default function SignUp({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview} style={{ width: '95%' }} showsVerticalScrollIndicator={false}>
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
                <CustomInput type='default' placeHolder='Name' onChange={setName} />
                <CustomInput type='email-address' placeHolder='Email' onChange={setEmail} />
                <CustomInput type='visible-password' placeHolder='Password' onChange={setPassword} />
                <CustomInput type='visible-password' placeHolder='Repeat Password' onChange={setRepassword} />
                <CustomInput type='phone-pad' placeHolder='Phone Number' onChange={setPhone} />
                <CustomInput type='default' placeHolder='Address' onChange={setAddress} />
                <CustomButton text='Sign up' />
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
        paddingBottom: 50,
        alignItems: 'center'
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
