import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryChart, VictoryBrushContainer, VictoryBar } from 'victory';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const ContainerBrush: FC = () => {
  return (
    <ExampleBox title="VictoryBrushContainer">
      <VictoryChart containerComponent={<VictoryBrushContainer />}>
        <VictoryBar data={data} />
      </VictoryChart>
    </ExampleBox>
  );
};

export default ContainerBrush;
