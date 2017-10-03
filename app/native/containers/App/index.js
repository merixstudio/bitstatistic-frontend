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
    const {
      repositories,
      users,
      commits,
      startDate,
    } = this.props.charts;

    const parsedRepositoriesChartData = repositories.data.length
      ? repositories.data.map((repository) => {
        return {
          ...repository,
          id: repository.id.toString(),
          displayName: repository.fullName.replace(/merixstudio\//gi, ''),
          commits: commits.data.length
          ? commits.data
          .filter(commit => parseInt(commit.repositoryId, 10) === parseInt(repository.id, 10))
          .length.toString()
          : '0',
        };
      })
      : [];

      const parsedUsersChartData = users.data.length
      ? users.data.map((user) => {
        return {
          ...user,
          id: user.id.toString(),
          commits: commits.data.length
            ? commits.data
                .filter(commit => parseInt(commit.userId, 10) === parseInt(user.id, 10))
                .length.toString()
            : '0',
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
          {!!repositories && commits && <Chart
            title={'Commits per repository'}
            data={parsedRepositoriesChartData}
            isLoading={commits.loading}
            width={this.props.ui.deviceWidth}
          />}
          {!!users && commits && <Chart
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
