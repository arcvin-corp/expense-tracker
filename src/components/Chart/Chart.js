import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = props => {
  const valuesArray = props.dataPoints.map(dp => dp.value);
  const totalMaxValue = Math.max(...valuesArray);

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
