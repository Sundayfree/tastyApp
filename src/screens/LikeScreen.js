import React, { Component } from 'react';
import { Image } from 'react-native';
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
  CheckBox,
  CardItem,
  Card,
  Body
} from 'native-base';
import { NavigationEvents, withNavigationFocus } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import MyModal from '../components/MyModal';

class LikeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      arr: []
    };
    this.closeModal = this.closeModal.bind(this);
    this.renderData = this.renderData.bind(this);
  }
  closeModal(e) {
    this.setState({
      isVisible: e
    });
  }
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      AsyncStorage.getItem('key').then(res => {
        this.setState({
          arr: JSON.parse(res)
        });
      });
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  renderData() {
    return this.state.arr.map((o, i) => {
      const img = o.image;
      return (
        <Card style={{ width: '85%', height: 150, marginBottom: 15 }} key={i}>
          <CardItem>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#f54275'
              }}
            >
              {o.title}
            </Text>
          </CardItem>
          <CardItem cardBody>
            <Image
              style={{ height: 110, width: '100%' }}
              source={{
                uri: img
              }}
            />
          </CardItem>
        </Card>
      );
    });
  }
  render() {
    // console.log(this.state.arr[0].image);
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

        {this.state.arr.length == 0 ? (
          <>
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
                    fontWeight: 'bold',

                    color: '#f54275'
                  }}
                >
                  Like Recipes to Save them for laters
                </Text>
              </View>
            </View>
          </>
        ) : (
          <Content>
            <View
              style={{
                alignItems: 'center',
                marginBottom: 15
              }}
            >
              {this.renderData()}
            </View>
          </Content>
        )}

        <MyModal
          visible={this.state.isVisible}
          close={this.closeModal}
          navigation={this.props.navigation}
        />
      </Container>
    );
  }
}

export default withNavigationFocus(LikeScreen);
