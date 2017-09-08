import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Chart } from '../../components';

import './Statistics.scss';

@inject('charts')
@observer
export default class Statistics extends Component {
  constructor(props) {
    super(props);

    this.props.charts.repositories;
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
};
