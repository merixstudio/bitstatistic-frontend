import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
} from 'victory-native';

import { styles } from './style';

export default ({
  title,
  description,
  data,
}) => (
  <View
    style={styles.container}
  >
    <View style={styles.headingContainer}>
      <Text style={styles.dash}>/</Text>
      <Text style={styles.heading}>{title}</Text>
    </View>
    <View>
      {description && <Text style={styles.description}>{description}</Text>}
      <VictoryChart
        domainPadding={15}
        height={(30 + 30) * data.length}
      >
        <VictoryAxis
          orientation="left"
          style={{
            tickLabels: {
              angle: 35,
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
          x={'date'}
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

