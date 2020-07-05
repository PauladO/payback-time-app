import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../authentication/LogIn/LogInScreen';
import SignUpScreen from '../authentication/SignUp/SignUpContainer';

const RootStack = createStackNavigator<RootStackParamList>();
const LoginStack = createStackNavigator<LoginStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='Login' component={LoginStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name='Login' component={LoginScreen} />
      <LoginStack.Screen name='SignUp' component={SignUpScreen} />
    </LoginStack.Navigator>
  );
}

export type RootStackParamList = {
  Login: {
    screen: LoginScreen,
    navigationOptions: { header: null, gesturesEnabled: false }
  }
};

export type LoginStackParamList = {
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: { header: null, gesturesEnabled: false }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: { header: null, gesturesEnabled: false }
  }
};