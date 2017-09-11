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
    {!!description && <p className="chart__description">{description}</p>}

    {data.some(chartData => chartData.commits) && <VictoryChart
      domainPadding={25}
      height={(25 + 50) * (data.length + 1)}
    >
      <VictoryAxis
        orientation="left"
        style={{
          tickLabels: {
            angle: 45,
            fontSize: 6,
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
        x={'displayName'}
        y={'commits'}
        horizontal
        style={{
          data: {
            fill: '#e09531',
            width: 50,
          },
        }}
      />
    </VictoryChart>}
    {data.some(chartData => !chartData.commits) &&
        <p className="chart__description chart__description--centered">There is no data for provided date</p>
    }
  </div>
);
