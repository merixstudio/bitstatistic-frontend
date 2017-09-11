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

  onOrientationChange() {
    const { width } = Dimensions.get('window');
    this.props.ui.changeDeviceWidth(width);
  }

  render() {
    const { repositories, users } = this.props.charts;

    const parsedRepositoriesChartData = repositories
      ? repositories.map((repository) => {
        return {
          ...repository,
          displayName: repository.fullName,
          commits: repository.commits.length,
        };
      })
      : [];

    const parsedUsersChartData = users
      ? users.map((user) => {
        return {
          ...user,
          commits: user.commits.length,
        };
      })
      : [];


    return (
      <View
        style={styles.main}
        onLayout={this.onOrientationChange}
      >
        <Header
          title="Bitstatistics"
        />
        <ScrollView>
          {!!repositories.length && <Chart
            title={'Repositories'}
            data={parsedRepositoriesChartData}
            width={this.props.ui.deviceWidth}
          />}
          {!!repositories.length && <Chart
            title={'Repositories'}
            data={parsedUsersChartData}
            width={this.props.ui.deviceWidth}
          />}
        </ScrollView>
      </View>
    );
  }
}
