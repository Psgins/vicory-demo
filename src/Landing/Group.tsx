import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryGroup, VictoryBar } from 'victory';

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

const Group: FC = () => {
  return (
    <ExampleBox title="VictoryGroup">
      <VictoryGroup offset={20}>
        <VictoryBar data={group1} />
        <VictoryBar data={group2} />
        <VictoryBar data={group3} />
      </VictoryGroup>
    </ExampleBox>
  );
};

export default Group;
