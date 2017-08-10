import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

import './Chart.scss';

export default class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chart">
        <h2 className="chart__title">{this.props.title}</h2>
        <p className="chart__description">{this.props.description}</p>
      </div>
    );
  }
};
