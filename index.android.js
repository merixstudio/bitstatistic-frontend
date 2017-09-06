/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Provider } from 'mobx-react';

import stores from './app/stores';

import { App } from './app/native/containers';

export default class bitstatistics extends Component {
  render() {
    return (
      <Provider
        ui={stores.ui}
      >
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('bitstatistics', () => bitstatistics);
