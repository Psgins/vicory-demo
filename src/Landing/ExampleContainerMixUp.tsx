import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import {
  VictoryChart,
  VictoryTooltip,
  VictoryScatter,
  VictoryLine,
  VictoryLegend,
} from 'victory';

const legend = [{ name: 'L0' }];

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const ExampleContainerMixUp: FC = () => {
  return (
    <ExampleBox title="Example VictoryChart+Line+Tooltip+Legend">
      <VictoryChart>
        <VictoryLegend title="Legends" data={legend} x={75} y={45} />
        <VictoryLine data={data} />
        <VictoryScatter
          data={data}
          labels={({ datum }) => {
            return datum.y;
          }}
          labelComponent={<VictoryTooltip />}
        />
      </VictoryChart>
    </ExampleBox>
  );
};

export default ExampleContainerMixUp;
