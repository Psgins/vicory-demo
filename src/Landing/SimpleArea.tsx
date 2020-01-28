import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryArea } from 'victory';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const SimpleArea: FC = () => {
  return (
    <ExampleBox title="VictoryArea">
      <VictoryArea data={data} />
    </ExampleBox>
  );
};

export default SimpleArea;
