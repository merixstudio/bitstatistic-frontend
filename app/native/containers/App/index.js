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

  parseRespositoriesData() {
    const {
      repositories,
      commits,
    } = this.props.charts;

    if (!repositories.data.length) return [];
    return repositories.data.map(repository => ({
      ...repository,
      id: repository.id.toString(),
      displayName: repository.fullName.replace(/merixstudio\//gi, ''),
      commits: commits.data.length
      ? commits.data
      .filter(commit => parseInt(commit.repositoryId, 10) === parseInt(repository.id, 10))
      .length
      : 0,
    }));
  }

  parseUsersData() {
    const {
      users,
      commits,
    } = this.props.charts;

    if (!users.data.length) return [];
    return users.data.map(user => ({
      ...user,
      id: user.id.toString(),
      commits: commits.data.length
        ? commits.data
            .filter(commit => parseInt(commit.userId, 10) === parseInt(user.id, 10))
            .length
        : 0,
    }));
  }

  render() {
    const parsedRepositoriesChartData = this.parseRespositoriesData();
    const parsedUsersChartData = this.parseUsersData();
    const {
      repositories,
      commits,
      users,
    } = this.props.charts;

    return (
      <View
        style={styles.main}
        onLayout={this.onOrientationChange}
      >
        <Header title="Bitstatistics" />
        <ScrollView style={styles.ScrollView}>
          {!!repositories && commits && repositories.data.length && <Chart
            title={'Commits per repository'}
            data={parsedRepositoriesChartData}
            isLoading={commits.loading}
            width={this.props.ui.deviceWidth}
          />}
          {!!users && commits && users.data.length && <Chart
            title={'Commits per user'}
            data={parsedUsersChartData}
            isLoading={commits.loading}
            width={this.props.ui.deviceWidth}
          />}
        </ScrollView>
      </View>
    );
  }
}
