import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryTooltip, VictoryBar } from 'victory';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

/* label piority
1. prop name "label" in data
2. output from parent "labels" props
*/

const ComponentTooltip: FC = () => {
  return (
    <ExampleBox title="VictoryTooltip">
      <VictoryBar
        data={data}
        labels={({ datum }) => datum.y}
        labelComponent={<VictoryTooltip />}
      />
    </ExampleBox>
  );
};

export default ComponentTooltip;
