import React, { Component } from 'react';
import { Modal } from 'react-native';
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
  Label,
  Thumbnail,
  CheckBox
} from 'native-base';
class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isCheck: false
    };
  }
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ alignItems: 'center' }}>
          <View
            style={{
              marginTop: '6%',
              flexDirection: 'row',

              alignItems: 'baseline'
            }}
          >
            <Item
              floatingLabel
              style={{
                width: '70%',
                borderColor: '#ccc'
              }}
            >
              <Label style={{ color: '#777' }}>UserName</Label>
              <Input />
            </Item>
            <View>
              <Thumbnail large source={require('../../assets/plus.png')} />
            </View>
          </View>
          <View style={{ marginTop: '2%' }}>
            <Item
              floatingLabel
              style={{
                width: '90%',
                borderColor: '#ccc'
              }}
            >
              <Label style={{ color: '#777' }}>Email</Label>
              <Input />
            </Item>
          </View>
          <View style={{ marginTop: '3%' }}>
            <Item
              floatingLabel
              style={{
                width: '90%',
                borderColor: '#ccc'
              }}
            >
              <Label style={{ color: '#777' }}>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
          </View>
          <View style={{ marginTop: '3%' }}>
            <Item
              floatingLabel
              style={{
                width: '90%',
                borderColor: '#ccc'
              }}
            >
              <Label style={{ color: '#777' }}>Repassword</Label>
              <Input secureTextEntry={true} />
            </Item>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: '3%'
            }}
          >
            <CheckBox checked={this.state.isCheck} />
            <Button
              light
              transparent
              onPress={() => this.setState({ isVisible: true })}
            >
              <Text style={{ color: '#185cc9' }}>Accept Privacy Policy</Text>
            </Button>
          </View>
          <View style={{ width: '90%', alignItems: 'center', marginTop: '8%' }}>
            <Button full rounded success>
              <Text>Submit</Text>
            </Button>
          </View>
        </Content>
        <Modal
          visible={this.state.isVisible}
          transparent={false}
          animationType={'slide'}
        >
          <Content>
            <View
              style={{
                flexDirection: 'row-reverse',
                marginTop: '5%',

                width: '96%'
              }}
            >
              <Icon
                name="cross"
                type="Entypo"
                onPress={() => this.setState({ isVisible: false })}
              />
            </View>
            <View
              style={{
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  color: '#333',
                  fontWeight: 'bold',
                  fontFamily: 'Helvetica',
                  fontSize: 23
                }}
              >
                Privacy Policy
              </Text>
            </View>
            <View
              style={{
                marginTop: '5%'
              }}
            >
              <Text
                style={{
                  color: '#333',

                  fontFamily: 'Helvetica',
                  fontSize: 18
                }}
              >
                nice good
              </Text>
            </View>
          </Content>
        </Modal>
      </Container>
    );
  }
}

export default RegisterScreen;
