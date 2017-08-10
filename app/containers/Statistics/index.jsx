import React, { Component } from 'react';

import { Chart } from '../../components';

import './Statistics.scss';

export default class Statistics extends Component {
  render() {
    return (
      <div className="statistics">
        <Chart
          title="Repositories"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </div>
    );
  }
}
