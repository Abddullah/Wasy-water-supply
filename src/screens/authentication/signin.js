
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, } from 'react-native';
import CustomInput from '../../components/input';
import CustomButton from '../../components/button';
import auth from '@react-native-firebase/auth';

const logo = require('../../assets/logo.png')

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = () => {
        auth()
            .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview} style={{ width: '95%' }} showsVerticalScrollIndicator={false}>
                <Image resizeMode='contain' source={logo} style={styles.imageLogo} />
                <View style={styles.brandNameContainer}>
                    <Text style={styles.brandName}>Easy Water Supply</Text>
                    <Text >Neat and clean sweet water</Text>
                </View>
                <CustomInput type='email-address' placeHolder='Email' onChange={setEmail} />
                <CustomInput type='visible-password' placeHolder='Password' onChange={setPassword} />
                <CustomButton text='Sign in'
                    // onPress={() => { navigation.navigate('Tabs') }}
                    onPress={() => { signin() }}

                />
                <TouchableOpacity>
                    <Text
                        style={styles.forget_Password}
                        onPress={() => navigation.navigate('ForgotPassword')}
                    >
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.newToSupplyContainer}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.newToSupplyText}>New to Easy Water Supply? </Text>
                    <Text style={[styles.newToSupplyText, { color: '#3460A9', }]}>Join Now</Text>
                </TouchableOpacity>
            </ScrollView>
        </View >
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
        paddingBottom: 100,
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
    forget_Password: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
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
})








// import React, { useState } from "react";
// import { View, Text, TextInput, Button } from "react-native";

// // Use functional or class component based on your preference.
// // Make it a default export.

// function Login({ onSubmit }) {
//     let [userName, setUserName] = useState("");
//     let [password, setPassword] = useState("")

//     return (
//         <View style={{ flex: 1 }}>
//             <TextInput
//                 id="username-input"
//                 onChangeText={setUserName}
//                 value={userName}
//                 placeholder="Username"
//             />
//             <TextInput
//                 id="password-input"
//                 onChangeText={setPassword}
//                 value={password}
//                 placeholder="password"
//                 secureTextEntry={true}
//             />
//             <Button
//                 id="login-button"
//                 title="Login"
//                 disabled={!userName || !password}
//                 onpress={() => { onSubmit(userName, password) }} />
//         </View>
//     )
// }

// export default function LoginForm({ onSubmit }) {
//     // return <View><Text>Hello</Text></View>;
//     return <View style={{ flex: 1 }}><Login onSubmit={onSubmit} /></View>
// }



// import React, { useState } from "react";
// import { StyleSheet, View, FlatList, Settings, ActivityIndicator } from "react-native";

// export default function App() {
//     // Write your logic here...
//     let [countries, setCountries] = useState([]);
//     let [offset, setOffset] = setState(0)
//     let [loading, setLoading] = useState(true);
//     let [count, setCount ] = useState(0)
//     const fetchCountries = async () => {
//         if(countries.length === count) return;
//         setLoading(true);
//         let URL = `https://example.com/countries?offset=${offset}&limit=20`
//         let {data} = await axios.get(URL);
//         setCountries([...countries, ...data.results]);
//         setLoading(false);
//         setCount(data.count)
//         setOffset(offset+20)
//     }
//     const loader = ()=>{
//         return loading?<ActivityIndicator size="large" />: null
//     }

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 style={styles.list}
//                 data={countries}
//                 onReachend={fetchCountries}
//                 onEndReachedThreshold={0.1}
//                 renderItem={({name}) => <View style={styles.listItem}><Text>{name}</Text></View>}
//                 ListFooterComponent={loader}
//             />
//         </View>);
// }

// You can also use class components if you like.
// Just remove above functional component and uncomment below class component:
// export default class App extends React.Component {
//   // Write your logic here ...
//
//   render() {
//     return (
//       <View style={styles.container}>
//          <FlatList
//            style={styles.list}
//            data={[]}
//            renderItem={() => <View style={styles.listItem}></View>}
//          />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     list: {
//         width: "100%",
//         height: "100%",
//     },
//     listItem: {
//         width: "100%",
//         height: "40px",
//         padding: "8px",
//         alignItems: "flexStart",
//     },
// });




