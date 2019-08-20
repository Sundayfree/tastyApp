import React, { Component } from 'react';
import {
  Container,
  Content,
  Input,
  Text,
  Icon,
  View,
  Button,
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
        <Content>
          <Icon
            name="gear"
            type="FontAwesome"
            style={{
              position: 'absolute',
              right: '5%',
              top: 15,
              fontSize: 33,
              color: '#74b566'
            }}
            onPress={() => this.setState({ isVisible: true })}
          />
          <Text>Like</Text>
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
