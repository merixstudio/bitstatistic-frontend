import React, { Component } from 'react';
import moment from 'moment';

import { Chart } from '../../components';

import './Statistics.scss';

export default class Statistics extends Component {
  constructor() {
    super();

    this.repositories = {
      labels: [moment().format('DD/MM/YYYY'), moment().day(-1).format('DD/MM/YYYY')],
      datasets: [
        {
          backgroundColor: 'rgb(222,143,51)',
          data: [44, 65],
        },
      ],
    };
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
