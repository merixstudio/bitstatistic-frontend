import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import DatePicker from 'material-ui/DatePicker';

import { ChartWrapper } from '../../components';

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
      startDate,
    } = this.props.charts;

    return (
      <div className="statistics">
        {!!startDate && <DatePicker
          className="statistics__input"
          floatingLabelText="Change statistics start date"
          defaultDate={startDate}
          onChange={this.onDateChange}
          maxDate={new Date()}
          autoOk
        />}
        {!!repositories && <ChartWrapper
          title={'Commits per repository'}
          data={parsedRepositoriesChartData}
          isLoading={commits.loading}
        />}
        {!!users && <ChartWrapper
          title={'Commits per user'}
          data={parsedUsersChartData}
          isLoading={commits.loading}
        />}
      </div>
    );
  }
}
