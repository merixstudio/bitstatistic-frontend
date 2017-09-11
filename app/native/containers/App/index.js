import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

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
    const { repositories, users, commits } = this.props.charts;

    const parsedRepositoriesChartData = repositories
      ? repositories.map((repository) => {
        return {
          displayName: repository.fullName,
          commits: commits
            ? commits.filter(commit => parseInt(commit.repositoryId, 10) === parseInt(repository.id, 10)).length
            : 0,
        };
      })
      : [];

    const parsedUsersChartData = users
      ? users.map((user) => {
        return {
          displayName: user.displayName,
          commits: commits
            ? commits.filter(commit => parseInt(commit.userId, 10) === parseInt(user.id, 10)).length
            : 0,
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
          {!!users && <Chart
            title={'Commits per repository'}
            data={parsedRepositoriesChartData}
            width={this.props.ui.deviceWidth}
          />}
          {!!users && <Chart
            title={'Commits per user'}
            data={parsedUsersChartData}
            width={this.props.ui.deviceWidth}
          />}
        </ScrollView>
      </View>
    );
  }
}
