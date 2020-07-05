import React, { Component } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default class HomeScreen extends Component {
  public render() {
    return (
      <View>
        <Text>{'HOME'}</Text>
        <Button
          mode='contained'
          accessibilityStates={null}
          onPress={this._signOut}
          >
          {'Sign out'}
          </Button>
      </View>
      );
  }

  private _signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out'))
      .catch(() => console.error('Sign out failed'));
  }
}