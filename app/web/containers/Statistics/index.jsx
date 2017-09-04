import React, { Component } from 'react';
import moment from 'moment';

import { Chart } from '../../components';

import './Statistics.scss';

export default class Statistics extends Component {
  constructor() {
    super();

    this.repositories = [
      { date: moment().format('DD/MM/YYYY'), commits: 44},
      { date: moment().day(-1).format('DD/MM/YYYY'), commits: 65},
      { date: moment().day(-2).format('DD/MM/YYYY'), commits: 33},
    ];
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="statistics">
        <Chart
          title="Repositories"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          data={this.repositories}
        />
      </div>
    );
  }
}
