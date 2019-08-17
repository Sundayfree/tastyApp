import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const StackNavigator = createStackNavigator({
  Login: {
    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: LoginScreen,
    navigationOptions: () => ({})
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'New User'
    })
  }
});

export default createAppContainer(StackNavigator);
