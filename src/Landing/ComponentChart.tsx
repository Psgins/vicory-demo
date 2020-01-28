import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryChart } from 'victory';

const ComponentChart: FC = () => {
  return (
    <ExampleBox title="VictoryChart">
      <VictoryChart />
    </ExampleBox>
  );
};

export default ComponentChart;
