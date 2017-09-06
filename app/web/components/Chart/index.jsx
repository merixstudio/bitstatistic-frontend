import React from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
 } from 'victory';

import './Chart.scss';

export default ({
  title,
  description,
  data,
}) => (
  <div className="chart">
    <h2 className="chart__title">{title}</h2>
    <p className="chart__description">{description}</p>
    <VictoryChart
      domainPadding={25}
      height={(25 + 50) * data.length}
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
        data={data}
        x={'date'}
        y={'commits'}
        horizontal
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
