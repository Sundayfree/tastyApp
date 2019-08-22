/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import AppNavigation from './navigations/AppNavigation';

export default class App extends Component<Props> {
  render() {
    console.disableYellowBox = true;
    return <AppNavigation />;
  }
}
