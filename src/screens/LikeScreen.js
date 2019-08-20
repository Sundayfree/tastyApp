import React, { Component } from 'react';
import {
  Container,
  Content,
  Input,
  Text,
  Icon,
  View,
  Button,
  Header,
  Right,
  CheckBox
} from 'native-base';

import MyModal from '../components/MyModal';
class LikeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal(e) {
    this.setState({
      isVisible: e
    });
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#fff', borderBottomColor: '#fff' }}>
          <Right>
            <Icon
              name="gear"
              type="FontAwesome"
              style={{
                fontSize: 33,
                color: '#74b566'
              }}
              onPress={() => this.setState({ isVisible: true })}
            />
          </Right>
        </Header>

        <Content>
          <View
            style={{
              width: '100%',
              height: 150,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#333',
                fontFamily: 'times'
              }}
            >
              Username
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center'
            }}
          >
            <View
              style={{
                width: '80%',
                height: 300,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 300,

                  color: '#f54275'
                }}
              >
                Like Recipes to Save them for laters
              </Text>
            </View>
          </View>
        </Content>
        <MyModal
          visible={this.state.isVisible}
          close={this.closeModal}
          navigation={this.props.navigation}
        />
      </Container>
    );
  }
}

export default LikeScreen;
