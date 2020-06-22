import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

interface State {
  email: string
  password: string
  isLoading: boolean
}

interface Props {
}

export default class LogInContainer extends Component<Props, State> {
  constructor() {
    super({});

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
        {/* <Button
          mode="contained"
          accessibilityStates={null}
          onPress={this._login}
          disabled={this.state.isLoading}
        >
          {"Register"}
        </Button> */}

        <Button
          mode='contained'
          accessibilityStates={null}
          onPress={this._register}
          loading={this.state.isLoading}
        >
          {!this.state.isLoading && 'Register'}
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

  private _register = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('User account created & signed in!', auth().currentUser);
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

  private _signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out'))
      .catch(() => console.error('Sign out failed'));
  }
}