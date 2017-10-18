import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
} from 'victory-native';

import { styles } from './style';


function getTicks(data) {
  if (data.reduce((max, item) => (item.commits > max ? item.commits : max), 0) <= 6) {
    return [1, 2, 3, 4, 5, 6];
  }
  return undefined;
}


const domainPadding = 15;
const labelComponent = (
  <VictoryLabel
    textAnchor="start"
    transform={{ translate: '15, -30' }}
  />
);

export default ({
  title,
  description,
  data,
  width,
}) => (
  <View style={styles.container}>
    <View style={styles.headingContainer}>
      <Text style={styles.dash}>/</Text>
      <Text style={styles.heading}>{title}</Text>
    </View>
    <View pointerEvents="none">
      {!!description && <Text style={styles.description}>{description}</Text>}
      <VictoryChart
        padding={{ top: 50, left: 35, bottom: 50, right: 35 }}
        domainPadding={domainPadding}
        height={(4 * domainPadding) * (data.length + 1)}
        width={width}
      >
        <VictoryAxis
          orientation="left"
          style={{ tickLabel: styles.tickLabel }}
          tickLabelComponent={labelComponent}
        />
        <VictoryAxis
          dependentAxis
          orientation="bottom"
          tickValues={getTicks(data)}
          style={{ tickLabel: styles.tickLabel }}
        />
        <VictoryBar
          data={data}
          x={'displayName'}
          y={'commits'}
          horizontal
          style={{
            data: {
              fill: '#e09531',
              width: 30,
            },
          }}
        />
      </VictoryChart>
    </View>
  </View>
);

