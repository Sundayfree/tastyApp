import React from 'react';
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
export default function Cards(props) {
  const { image, title, id, sourceUrl } = props;

  return (
    <Card style={{ backgroundColor: 'red', width: '86%' }}>
      <CardItem cardBody>
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
          <Button transparent light onPress={() => props.like(!props.isLike)}>
            {props.isLike ? (
              <Icon name="heart" type="FontAwesome" style={{ color: 'red' }} />
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
