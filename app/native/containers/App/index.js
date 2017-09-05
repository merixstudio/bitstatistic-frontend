import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

import { styles } from './style';

import { Header } from '../../components';

class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

export default App;
