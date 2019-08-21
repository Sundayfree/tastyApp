import React, { Component } from 'react';
import {
  Container,
  Content,
  Input,
  Text,
  Icon,
  View,
  Button,
  Item,
  Spinner
} from 'native-base';
import { get } from '../API';
import Cards from '../components/Cards';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isLike: false,
      dataArr: [],
      isRefresh: false,
      image: '',
      title: '',
      Id: '',
      likeArr: [],
      isOk: true
    };

    this.contentViewScroll = this.contentViewScroll.bind(this);
    this.cardOnClick = this.cardOnClick.bind(this);
    this.likeOnClick = this.likeOnClick.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(e) {
    const query = e.nativeEvent.text;
    get(
      'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' +
        query
    ).then(res => {
      console.log(res);
      if (Object.values(res).length == 0) {
        this.setState({
          isOk: false
        });
      } else {
        this.setState({
          dataArr: res,
          isOk: true
        });
      }
    });
  }
  componentDidMount() {
    get('https://api.spoonacular.com/recipes/random?number=10').then(res => {
      this.setState({
        dataArr: res.recipes,
        isLoading: true
      });
    });
  }
  async likeOnClick(obj) {
    const { likeArr } = this.state;
    const arr = likeArr.filter(e => e.Id !== obj.Id);
    if (!obj.isLike) {
      this.setState({
        isLike: obj.isLike
      });
    } else {
      this.setState({
        isLike: obj.isLike,
        Id: obj.Id,
        image: obj.image,
        title: obj.title
      });
      arr.push({ image: obj.image, title: obj.title, Id: obj.Id });
    }
    this.setState({
      likeArr: arr
    });
    AsyncStorage.setItem('key', JSON.stringify(arr));
  }

  contentViewScroll(e) {
    var offsetY = e.nativeEvent.contentOffset.y;

    var contentSizeHeight = e.nativeEvent.contentSize.height;
    var originScrollHeight = e.nativeEvent.layoutMeasurement.height;

    if (offsetY + originScrollHeight >= contentSizeHeight) {
      const { dataArr } = this.state;

      this.setState({
        isRefresh: true,
        isOk: true
      });
      get('https://api.spoonacular.com/recipes/random?number=10').then(res => {
        this.setState({
          isRefresh: false,
          dataArr: dataArr.concat(res.recipes)
        });
      });
    }
  }

  renderData = () => {
    const { dataArr, isLoading } = this.state;
    return isLoading ? (
      dataArr.map(v => {
        return (
          <Cards
            key={v.id}
            Id={v.id}
            image={v.image}
            title={v.title}
            sourceUrl={v.sourceUrl}
            like={this.likeOnClick}
            isLike={this.state.isLike}
            imgClick={this.cardOnClick}
            sourceName={v.sourceName}
          />
        );
      })
    ) : (
      <Spinner color="green" />
    );
  };
  cardOnClick(e) {
    this.props.navigation.navigate('Web', e);
  }

  render() {
    const { dataArr } = this.state;
    return (
      <Container>
        <View style={{ marginTop: '15%', alignItems: 'center' }}>
          <Item
            searchBar
            rounded
            style={{ width: '90%', height: 45, borderColor: '#74b566' }}
          >
            <Icon name="search" style={{ color: '#74b566' }} />
            <Input
              placeholder="Search for Ingredients"
              style={{ color: '#777' }}
              onBlur={this.searchHandler}
            />
          </Item>
        </View>
        <Content
          onMomentumScrollEnd={this.contentViewScroll}
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              marginTop: '5%',
              alignItems: 'center'
            }}
          >
            {this.state.isOk ? (
              this.renderData()
            ) : (
              <Text
                style={{ color: '#74b566', fontSize: 23, fontWeight: 'bold' }}
              >
                {' '}
                Sorry! We cannot find any that match this search{' '}
              </Text>
            )}
          </View>
          {this.state.isRefresh ? <Spinner color="green" /> : null}
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
