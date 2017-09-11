import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import DatePicker from 'material-ui/DatePicker';

import { Chart } from '../../components';

import './Statistics.scss';

@inject('charts')
@observer
export default class Statistics extends Component {
  constructor(props) {
    super(props);

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(event, date) {
    this.props.charts.changeDate(date);
  }

  render() {
    const {
      repositories,
      users,
      commits,
      startDate,
    } = this.props.charts;

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
        {!!startDate && <DatePicker
          className="statistics__input"
          floatingLabelText="Change statistics start date"
          defaultDate={startDate}
          onChange={this.onDateChange}
        />}
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
