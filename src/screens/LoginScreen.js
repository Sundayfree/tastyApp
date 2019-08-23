import React, { Component } from 'react';
import { Platform, StyleSheet, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Text,
  Icon,
  View,
  Button,
  Toast
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { Root } from 'native-base';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      email: '',
      password: ''
    };
    this.login = this.login.bind(this);
  }
  async login() {


    const user = await AsyncStorage.getItem('u');
    if (user) {
      const { email, password } = this.state;
      if (
        email === JSON.parse(user).email &&
        password === JSON.parse(user).password
      ) {
        AsyncStorage.setItem('u', user);
        this.props.navigation.navigate('home');
        return;
      }
    }
    Toast.show({
      style: {
        marginBottom: 450
      },
      text: 'Email or Password Wrong',
      // buttonText: 'Okay',
      type: 'danger'
    });
  }
  render() {
    return (
      <Root>
        <Container style={{ alignItems: 'center' }}>
          <Content>
            <View style={{ alignItems: 'center', marginTop: '30%' }}>
              <Image
                source={require('../../assets/logo.png')}
                style={{ width: '80%', height: 170 }}
              />
            </View>
            <View
              style={{
                marginTop: '10%',
                alignItems: 'center'
              }}
            >
              <Item
                rounded
                style={{
                  width: '92%',
                  borderColor: '#ccc'
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 5
                  }}
                >
                  <Icon
                    name="email-outline"
                    type="MaterialCommunityIcons"
                    style={{ fontSize: 25, color: '#777' }}
                  />
                  <Input
                    placeholder="Email"
                    style={{ color: '#777' }}
                    onChangeText={text => this.setState({ email: text })}
                  />
                </View>
              </Item>
            </View>
            <View
              style={{
                marginTop: '5%',
                borderColor: '#ccc',
                alignItems: 'center'
              }}
            >
              <Item
                rounded
                style={{
                  width: '92%',
                  borderColor: '#ccc'
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 5
                  }}
                >
                  <Icon
                    name="lock"
                    type="AntDesign"
                    style={{ fontSize: 25, color: '#777' }}
                  />
                  <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    style={{ color: '#777' }}
                    onChangeText={text => this.setState({ password: text })}
                  />
                </View>
              </Item>
            </View>
            <View
              style={{
                marginTop: 30,
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '30%'
              }}
            >
              <Button full rounded success onPress={this.login}>
                <Text>Sign In</Text>
              </Button>
              <Button
                transparent
                light
                onPress={() => this.props.navigation.navigate('Register')}
              >
                <Text style={{ color: '#185cc9' }}>SignUp</Text>
              </Button>
            </View>
          </Content>
        </Container>
      </Root>
    );
  }
}

export default LoginScreen;
