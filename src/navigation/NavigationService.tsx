import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../authentication/LogIn/LogInScreen';
import SignUpScreen from '../authentication/SignUp/SignUpContainer';
import { RootStack, LoginStack } from './Stacks';

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