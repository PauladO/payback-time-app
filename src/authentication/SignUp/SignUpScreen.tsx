import React, { Component } from 'react';
import auth from '@react-native-firebase/auth';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

interface State {
    email: string
    password: string
    isLoading: boolean
  }

interface Props {
}

export default class SignUpScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
        email: '',
        password: '',
        isLoading: false
    };
  }

  public render() {
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
                this._signUp();
              }}
            />
            <Button
              mode='contained'
              accessibilityStates={null}
              onPress={this._signUp}
              loading={this.state.isLoading}
            >
              {!this.state.isLoading && 'Register'}
            </Button>
          </View>
      );
  }

  private _signUp() {
    this.setState({isLoading: true});

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
}
