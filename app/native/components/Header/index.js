import React, { Component } from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';

import { styles } from './style';

export default class Header extends Component {
  render() {
    return (
      <View>
        <View
          style={styles.header}
        >
          <View
            style={styles.content}
          >
            <Image
              style={styles.image}
              source={require('../../../assets/images/merix_logo_text.png')}
            />
            <Text
              style={styles.title}
            >
              Bitstatistics
            </Text>
          </View>
          <Image
            source={require('../../../assets/images/header_arrows.png')}
          />
        </View>
        <View
          style={styles.border}
        />
      </View>
    );
  }
}

