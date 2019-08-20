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

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isLike: false,
      dataArr: [],
      isRefresh: false
    };
    this.contentViewScroll = this.contentViewScroll.bind(this);
    this.cardOnClick = this.cardOnClick.bind(this);
  }
  componentDidMount() {
    // get('https://api.spoonacular.com/recipes/random?number=10').then(res => {
    //   this.setState({
    //     dataArr: res.recipes,
    //     isLoading: true
    //   });
    // });
  }
  likeOnClick = e => {
    this.setState({
      isLike: e
    });
  };
  contentViewScroll(e) {
    var offsetY = e.nativeEvent.contentOffset.y;

    var contentSizeHeight = e.nativeEvent.contentSize.height;
    var originScrollHeight = e.nativeEvent.layoutMeasurement.height;

    if (offsetY + originScrollHeight >= contentSizeHeight) {
      const { dataArr } = this.state;
      this.setState({
        isRefresh: true
      });
      get('https://api.spoonacular.com/recipes/random?number=10').then(res => {
        this.setState({
          isRefresh: false,
          dataArr: dataArr.concat(res.recipes)
        });
        console.log(res.recipes);
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
            id={v.id}
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
            <Input placeholder="Search for recipes" style={{ color: '#777' }} />
          </Item>
        </View>
        <Content
          style={{ flex: 1 }}
          onMomentumScrollEnd={this.contentViewScroll}
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: '5%', alignItems: 'center' }}>
            {this.renderData()}
          </View>
          {this.state.isRefresh ? <Spinner color="green" /> : null}
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
