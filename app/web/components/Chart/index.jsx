import React, { Component } from 'react';
import {
  HorizontalBar,
  defaults,
} from 'react-chartjs-2';

import './Chart.scss';

export default class Chart extends Component {
  constructor(props) {
    super(props);

    defaults.global.legend = false;
  }

  render() {
    return (
      <div className="chart">
        <h2 className="chart__title">{this.props.title}</h2>
        <p className="chart__description">{this.props.description}</p>
        <HorizontalBar
          data={this.props.data}
        />
      </div>
    );
  }
};
