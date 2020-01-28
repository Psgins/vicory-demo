import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryChart, VictoryVoronoiContainer, VictoryBar } from 'victory';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const ContainerVoronoi: FC = () => {
  return (
    <ExampleBox title="VictoryVoronoiContainer">
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => `${datum.x}, ${datum.y}`}
          />
        }
      >
        <VictoryBar data={data} />
      </VictoryChart>
    </ExampleBox>
  );
};

export default ContainerVoronoi;
