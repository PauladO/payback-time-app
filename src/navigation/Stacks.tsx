import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../authentication/LogIn/LogInScreen';
import SignUpScreen from '../authentication/SignUp/SignUpContainer';

export const RootStack = createStackNavigator<RootStackParamList>();
export const LoginStack = createStackNavigator<LoginStackParamList>();

export type RootStackParamList = {
  Login: {
    screen: LoginScreen;
    navigationOptions: { header: null; gesturesEnabled: false; };
  };
};

export type LoginStackParamList = {
  SignUp: {
    screen: SignUpScreen;
    navigationOptions: { header: null; gesturesEnabled: false; };
  };
  Login: {
    screen: LoginScreen;
    navigationOptions: { header: null; gesturesEnabled: false; };
  };
};
