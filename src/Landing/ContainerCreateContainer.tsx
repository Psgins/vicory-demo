import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryChart, createContainer, VictoryBar } from 'victory';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const ContainerCreateContainer: FC = () => {
  const CustomContainer = createContainer('selection', 'zoom');
  return (
    <ExampleBox title="createContainer (eg. selection, zoom)">
      <VictoryChart containerComponent={<CustomContainer />}>
        <VictoryBar
          data={data}
          style={{
            data: { fill: ({ active }) => (active ? 'tomato' : 'black') },
          }}
        />
      </VictoryChart>
    </ExampleBox>
  );
};

export default ContainerCreateContainer;
