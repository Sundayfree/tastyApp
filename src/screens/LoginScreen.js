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
  Button
} from 'native-base';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  render() {
    return (
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
            <Button
              full
              rounded
              success
              onPress={() => this.props.navigation.navigate('home')}
            >
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
    );
  }
}

export default LoginScreen;
