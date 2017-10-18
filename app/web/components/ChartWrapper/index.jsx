import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Chart from '../Chart';

import './ChartWrapper.scss';

function renderContent(isLoading, data) {
  if (isLoading) {
    return <CircularProgress className="chart__progress" />;
  }
  if (data.some(chartData => chartData.commits)) {
    return <Chart data={data} />;
  }
  return (
    <p className="chart__description chart__description--centered">
      There is no data for provided date
    </p>
  );
}

export default ({
  title,
  description,
  data,
  isLoading,
}) => (
  <div className="chart">
    <h2 className="chart__title">{title}</h2>
    {!!description && <p className="chart__description">{description}</p>}
    {renderContent(isLoading, data)}
  </div>
);
