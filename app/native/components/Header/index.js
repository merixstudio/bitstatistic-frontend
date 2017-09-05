import React, { Component } from 'react';

import {
  View,
  Image,
} from 'react-native';

import { styles } from './style';

export default class Header extends Component {
  render() {
    return (
      <View
        style={styles.header}
      >
        <Image
          source={require('../../../assets/images/merix_logo_text.png')}
        />
      </View>
    );
  }
}

