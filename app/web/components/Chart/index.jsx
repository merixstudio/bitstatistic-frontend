import React from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
 } from 'victory';

function getTicks(data) {
  if (data.reduce((max, item) => (item.commits > max ? item.commits : max), 0) <= 6) {
    return [1, 2, 3, 4, 5, 6];
  }
  return undefined;
}

export default ({ data }) => (
  <VictoryChart
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
      tickValues={getTicks(data)}
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
  </VictoryChart>
);
