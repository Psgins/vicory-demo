import React, { FC } from 'react';
import { VictoryLine } from 'victory';
import ExampleBox from '../shared/ExampleBox';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const SimpleLine: FC = () => {
  return (
    <ExampleBox title="VictoryLine">
      <VictoryLine data={data} />
    </ExampleBox>
  );
};

export default SimpleLine;
