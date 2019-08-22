import React, { Component } from 'react';
import { Modal } from 'react-native';
import {
  Container,
  Content,
  Item,
  Input,
  Text,
  Icon,
  View,
  Button,
  Label,
  Thumbnail,
  Header,
  Right
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avator: '',
      username: '',
      showTxt: 'Logout'
    };
    this.focus = this.focus.bind(this);
  }
  focus() {
    this.setState({
      showTxt: 'Confirm'
    });
  }
  componentDidMount() {
    AsyncStorage.getItem('u').then(u => {
      this.setState({
        username: JSON.parse(u).username,
        avator: JSON.parse(u).avator
      });
      console.log(JSON.parse(u).avator);
    });
  }
  render() {
    const { avator, username, showTxt } = this.state;
    return (
      <Modal
        visible={this.props.visible}
        transparent={false}
        animationType={'fade'}
      >
        <Header style={{ backgroundColor: '#fff', borderBottomColor: '#fff' }}>
          <Right>
            <Icon
              name="cross"
              type="Entypo"
              onPress={() => this.props.close(false)}
              style={{
                color: '#74b566'
              }}
            />
          </Right>
        </Header>
        <Content>
          <View
            style={{
              alignItems: 'center',
              height: 500,
              justifyContent: 'space-between'
            }}
          >
            <View style={{ alignItems: 'center' }}>
              {avator ? (
                <Thumbnail
                  large
                  source={{
                    uri: avator.uri
                  }}
                  style={{ marginTop: '3%' }}
                />
              ) : (
                <Thumbnail
                  large
                  source={require('../../assets/plus.png')}
                  style={{ marginTop: '3%' }}
                />
              )}

              <Item
                style={{ marginTop: '3%', width: '90%', borderColor: '#ccc' }}
              >
                <Label style={{ color: '#777' }}>Username</Label>
                <Input
                  value={username}
                  onChangeText={text => this.setState({ username: text })}
                  onFocus={this.focus}
                  onBlur={() => {
                    this.setState({
                      showTxt: 'Logout'
                    });
                  }}
                />
              </Item>
            </View>
            <View
              style={{
                width: '90%'
              }}
            >
              <Button
                full
                rounded
                danger
                style={{ alignItems: 'center' }}
                onPress={() => this.props.navigation.navigate('user')}
              >
                <Text style={{ color: '#fff' }}>{showTxt}</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Modal>
    );
  }
}

export default MyModal;
