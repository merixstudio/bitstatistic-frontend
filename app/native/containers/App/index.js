import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
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
  }

  render() {
    return (
      <View
        style={styles.main}
      >
        <Header />
        <ScrollView>
          <Chart
            title={'Repositories'}
            description={'Lorem ipsum dolor sit amet, adipisicing elit.'}
            data={this.repositories}
          />
        </ScrollView>
      </View>
    );
  }
}

export default App;
