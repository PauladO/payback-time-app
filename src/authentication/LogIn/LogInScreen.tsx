import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { LoginStackParamList } from '../../navigation/Stacks';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenNavigationProp = StackNavigationProp<
  LoginStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

interface State {
  email: string
  password: string
  isLoading: boolean
}

export default class LogInScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
        email: '',
        password: '',
        isLoading: false
    };
  }

  render() {
    return (
      <View>
        <TextInput
          accessibilityStates={null}
          mode='outlined'
          label='Email'
          value={this.state.email}
          onChangeText={(email: string) => this.setState({ email })}
          returnKeyType={'next'}
        />
        <TextInput
          accessibilityStates={null}
          label='Password'
          textContentType='password'
          secureTextEntry={true}
          mode='outlined'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          returnKeyType={'go'}
          onSubmitEditing={() => {
            this._login();
          }}
        />
        <Button
          mode='contained'
          accessibilityStates={null}
          onPress={this._login}
          loading={this.state.isLoading}
        >
          {!this.state.isLoading && 'Login'}
        </Button>
        <Button
          mode='contained'
          accessibilityStates={null}
          onPress={() => this.props.navigation.navigate('SignUp')}
          disabled={this.state.isLoading}
        >
          {'Sign up'}
        </Button>

        <Button
          mode='contained'
          accessibilityStates={null}
          onPress={this._signOut}
          loading={this.state.isLoading}
        >
          {!this.state.isLoading && 'sign out'}
        </Button>
      </View>
    );
  }

  private _login = () => {
    this.setState({isLoading: true});

    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('signed in!');
        this.setState({isLoading: false});
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          console.log('User not found!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        this.setState({isLoading: false});

        console.error(error);
      });
  }

  private _signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out'))
      .catch(() => console.error('Sign out failed'));
  }
}