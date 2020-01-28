import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryLine, VictoryChart } from 'victory';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const SimpleLineWithVictoryChart: FC = () => {
  const jsOptions = {
    // range: { x: [0, 5], y: [0, 3] },
  };
  return (
    <ExampleBox>
      <VictoryChart>
        <VictoryLine data={data} {...jsOptions} />
      </VictoryChart>
    </ExampleBox>
  );
};

export default SimpleLineWithVictoryChart;
