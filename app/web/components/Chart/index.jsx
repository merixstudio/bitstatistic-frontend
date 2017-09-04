import React, { Component } from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
 } from 'victory';

import './Chart.scss';

export default class Chart extends Component {
  render() {
    return (
      <div className="chart">
        <h2 className="chart__title">{this.props.title}</h2>
        <p className="chart__description">{this.props.description}</p>
        <VictoryChart
          domainPadding={25}
        >
          <VictoryAxis
            orientation="left"
            style={{
              tickLabels: {
                angle: 45,
                fontSize: 8,
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            orientation="bottom"
            style={{
              tickLabels: {
                fontSize: 8,
              },
            }}
          />
          <VictoryBar
            animate={{ duration: 500 }}
            data={this.props.data}
            x={'date'}
            y={'commits'}
            horizontal={true}
            style={{
              data: {
                fill: '#e09531',
                width: 50,
              },
            }}
          />
        </VictoryChart>
      </div>
    );
  }
};
