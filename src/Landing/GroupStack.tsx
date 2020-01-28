import React, { FC } from 'react';
import { VictoryStack, VictoryBar } from 'victory';
import ExampleBox from '../shared/ExampleBox';

const group1 = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const group2 = [
  { x: 1, y: 3 },
  { x: 2, y: 2 },
  { x: 3, y: 6 },
  { x: 4, y: 8 },
  { x: 5, y: 9 },
];

const group3 = [
  { x: 1, y: 3 },
  { x: 2, y: 3 },
  { x: 3, y: 9 },
  { x: 4, y: 2 },
  { x: 5, y: 5 },
];

const GroupStack: FC = () => {
  return (
    <ExampleBox title="VictoryStack">
      <VictoryStack>
        <VictoryBar data={group1} />
        <VictoryBar data={group2} />
        <VictoryBar data={group3} />
      </VictoryStack>
    </ExampleBox>
  );
};

export default GroupStack;
