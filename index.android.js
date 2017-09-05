/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
} from 'react-native';

import { App } from './app/native/containers';

export default class bitstatistics extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('bitstatistics', () => bitstatistics);
