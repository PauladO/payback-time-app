import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../authentication/LogIn/LogInScreen';
import SignUpScreen from '../authentication/SignUp/SignUpScreen';
import { RootStack, LoginStack, MainStack } from './Stacks';
import HomeScreen from '../Home/HomeScreen';
import auth from '@react-native-firebase/auth';

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        { auth().currentUser ? (
          <RootStack.Screen name='Main' component={MainStackScreen} />
          ) : (
          <RootStack.Screen name='Login' component={LoginStackScreen} />
          )
      }
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

function MainStackScreen() {
  return(
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} />
    </MainStack.Navigator>
  );
}