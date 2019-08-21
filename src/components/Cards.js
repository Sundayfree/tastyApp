import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  View,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false
    };
    this.click = this.click.bind(this);
  }
  click() {
    const { image, title, Id, sourceUrl, sourceName } = this.props;

    this.props.like({
      isLike: !this.props.isLike,
      image,
      Id,
      title
    });

    this.setState({
      isLike: !this.props.isLike
    });
  }
  render() {
    const { image, title, Id, sourceUrl, sourceName } = this.props;

    return (
      <Card style={{ width: '86%' }}>
        <CardItem
          button
          cardBody
          onPress={() => this.props.imgClick({ sourceName, sourceUrl })}
        >
          <Image
            source={{ uri: image }}
            style={{ height: 150, width: null, flex: 1 }}
          />
        </CardItem>

        <CardItem style={{ height: 40 }}>
          <Left>
            <Text>{title}</Text>
          </Left>
          <Right>
            <Button transparent light onPress={this.click}>
              {this.state.isLike ? (
                <Icon
                  name="heart"
                  type="FontAwesome"
                  style={{ color: 'red' }}
                />
              ) : (
                <Icon
                  name="heart-o"
                  type="FontAwesome"
                  style={{ color: 'red' }}
                />
              )}
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
