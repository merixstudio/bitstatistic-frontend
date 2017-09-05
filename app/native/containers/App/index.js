import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import moment from 'moment';

import { styles } from './style';

import {
  Header,
  Chart,
} from '../../components';

class App extends Component {
  constructor(props) {
    super(props);

    this.repositories = [
      { date: moment().format('DD/MM/YYYY'), commits: 44 },
      { date: moment().day(-1).format('DD/MM/YYYY'), commits: 65 },
      { date: moment().day(-2).format('DD/MM/YYYY'), commits: 33 },
      { date: moment().day(-6).format('DD/MM/YYYY'), commits: 63 },
      { date: moment().day(-4).format('DD/MM/YYYY'), commits: 43 },
      { date: moment().day(-7).format('DD/MM/YYYY'), commits: 43 },
      { date: moment().day(-24).format('DD/MM/YYYY'), commits: 43 },
      { date: moment().day(-8).format('DD/MM/YYYY'), commits: 43 },
      { date: moment().day(-16).format('DD/MM/YYYY'), commits: 43 },
    ];

    this.state = {
      width: 320,
    };

    this.onOrientationChange = this.onOrientationChange.bind(this);
  }

  onOrientationChange() {
    const { width } = Dimensions.get('window');

    this.setState({
      width,
    });
  }

  render() {
    return (
      <View
        style={styles.main}
        onLayout={this.onOrientationChange}
      >
        <Header />
        <ScrollView>
          <Chart
            title={'Repositories'}
            description={'Lorem ipsum dolor sit amet, adipisicing elit.'}
            data={this.repositories}
            width={this.state.width}
          />
        </ScrollView>
      </View>
    );
  }
}

export default App;
