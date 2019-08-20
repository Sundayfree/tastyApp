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
import ImagePicker from 'react-native-image-picker';
class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isCheck: false,
      avator: null,
      email: '',
      username: '',
      password: '',
      repassword: ''
    };
    this.handleImagePicker = this.handleImagePicker.bind(this);
  }
  handleImagePicker() {
    const options = {
      title: null,
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Open Camera',
      chooseFromLibraryButtonTitle: 'Choose From Photos',
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      noData: true,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.uri) {
        let source = { uri: response.uri };

        this.setState({
          avator: source
        });
      }
    });
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
              <Label style={{ color: '#777' }}>Username</Label>
              <Input onChangeText={text => this.setState({ username: text })} />
            </Item>
            <View>
              <Button transparent light onPress={this.handleImagePicker}>
                {this.state.avator === null ? (
                  <Thumbnail large source={require('../../assets/plus.png')} />
                ) : (
                  <Thumbnail large source={this.state.avator} />
                )}
              </Button>
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
              <Input onChangeText={text => this.setState({ email: text })} />
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
              <Input
                secureTextEntry={true}
                onChangeText={text => this.setState({ password: text })}
              />
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
              <Input
                secureTextEntry={true}
                onChangeText={text => this.setState({ repassword: text })}
              />
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
