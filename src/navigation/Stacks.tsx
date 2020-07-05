import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../authentication/LogIn/LogInScreen';
import SignUpScreen from '../authentication/SignUp/SignUpScreen';
import HomeScreen from '../Home/HomeScreen';

export const RootStack = createStackNavigator<RootStackParamList>();
export const MainStack = createStackNavigator<MainStackParamList>();
export const LoginStack = createStackNavigator<LoginStackParamList>();

export type RootStackParamList = {
  Login: {
    screen: LoginScreen;
    navigationOptions: { header: null; gesturesEnabled: false; };
  };
  Main: {
    screen: HomeScreen;
    navigationOptions: { header: null; gesturesEnabled: false; };
  };
};

export type MainStackParamList = {
    Home: {
      screen: HomeScreen;
      navigationOptions: { header: null; gesturesEnabled: false; };
    }
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
