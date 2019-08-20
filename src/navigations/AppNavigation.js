import React from 'react';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { Icon } from 'native-base';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import LikeScreen from '../screens/LikeScreen';

const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => {
          return focused ? (
            <Icon name="home" type="FontAwesome" style={{ color: tintColor }} />
          ) : (
            <Icon
              name="home"
              type="AntDesign"
              style={{ color: tintColor, fontSize: 30 }}
            />
          );
        }
      }
    },
    Like: {
      screen: LikeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => {
          return focused ? (
            <Icon
              name="heart"
              type="FontAwesome"
              style={{ color: tintColor, fontSize: 24 }}
            />
          ) : (
            <Icon
              name="heart-o"
              type="FontAwesome"
              style={{ color: tintColor, fontSize: 24 }}
            />
          );
        }
      }
    }
  },
  {
    lazy: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 12
      },

      activeTintColor: '#fff',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#74b566'
        // marginTop: '3%'
      }
    }
  }
);
const StackNavigator = createStackNavigator(
  {
    Login: {
      // `ProfileScreen` is a React component that will be the main content of the screen.
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'New User'
      })
    }
  },
  {
    defaultNavigationOptions: () => ({
      headerBackTitle: null,
      headerTintColor: '#555',
      headerTitleStyle: {
        fontFamily: 'Georgia'
      }
    })
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      user: StackNavigator,
      home: BottomNavigator
    },
    {
      initialRouteName: 'user'
    }
  )
);
