import React, { Component } from 'react';
import { Container, Spinner } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const curUser = await AsyncStorage.getItem('u');

    this.props.navigation.navigate(curUser ? 'home' : 'user');
  };

  // Render any loading content that you like here
  render() {
    return (
      <Container
        style={{
          justifyContent: 'center'
        }}
      >
        <Spinner color="green" />
      </Container>
    );
  }
}
export default AuthLoadingScreen;
