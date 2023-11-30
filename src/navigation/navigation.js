// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/authentication/splash';
import SignIn from '../screens/authentication/signin';
import SignUp from '../screens/authentication/signup';
import ForgotPassword from '../screens/authentication/forgotpassword';
import Tabs from '../navigation/tabs';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{ headerShown: false }} component={Splash} name="Splash" /> */}
        <Stack.Screen options={{ headerShown: false }} component={SignIn} name="SignIn" />
        {/* <Stack.Screen options={{ headerShown: false }} component={SignUp} name="SignUp" /> */}
        {/* <Stack.Screen options={{ headerShown: false }} component={ForgotPassword} name="ForgotPassword" /> */}
        {/* <Stack.Screen options={{ headerShown: false }} component={Tabs} name="Tabs" /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;