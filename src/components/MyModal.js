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

class MyModal extends Component {
  render() {
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
              <Thumbnail
                large
                source={require('../../assets/plus.png')}
                style={{ marginTop: '3%' }}
              />
              <Item
                style={{ marginTop: '3%', width: '90%', borderColor: '#ccc' }}
              >
                <Label style={{ color: '#777' }}>Username</Label>
                <Input />
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
                <Text style={{ color: '#fff' }}>Logout</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Modal>
    );
  }
}

export default MyModal;
