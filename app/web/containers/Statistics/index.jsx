import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Chart } from '../../components';

import './Statistics.scss';

@inject('charts')
@observer
export default class Statistics extends Component {
  render() {
    const { repositories, users, commits } = this.props.charts;

    const parsedRepositoriesChartData = repositories
      ? repositories.map((repository) => {
        return {
          ...repository,
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
          ...user,
          commits: commits
            ? commits.filter(commit => parseInt(commit.userId, 10) === parseInt(user.id, 10)).length
            : 0,
        };
      })
    : [];

    return (
      <div className="statistics">
        {!!repositories && <Chart
          title={'Commits per repository'}
          data={parsedRepositoriesChartData}
        />}
        {!!users && <Chart
          title={'Commits per user'}
          data={parsedUsersChartData}
        />}
      </div>
    );
  }
}
