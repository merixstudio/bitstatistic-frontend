import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import moment from 'moment';

import { observer } from 'mobx-react';

import { styles } from './style';

import {
  Header,
  Chart,
} from '../../components';

@observer(['ui', 'charts'])
export default class App extends Component {
  constructor(props) {
    super(props);
    this.onOrientationChange = this.onOrientationChange.bind(this);
  }

  componentDidMount() {
    this.props.charts.fetchRepositories();
  }

  onOrientationChange() {
    const { width } = Dimensions.get('window');
    this.props.ui.changeDeviceWidth(width);
  }

  render() {
    const repositories = this.props.charts.repositories.slice();

    return (
      <View
        style={styles.main}
        onLayout={this.onOrientationChange}
      >
        <Header />
        <ScrollView>
          {!!repositories.length && <Chart
            title={'Repositories'}
            description={'Lorem ipsum dolor sit amet, adipisicing elit.'}
            data={repositories}
            width={this.props.ui.deviceWidth}
          />}
        </ScrollView>
      </View>
    );
  }
}
