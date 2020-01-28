import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryChart } from 'victory';

const ContainerVictory: FC = () => {
  return (
    <ExampleBox title="VictoryChart">
      <VictoryChart />
    </ExampleBox>
  );
};

export default ContainerVictory;
