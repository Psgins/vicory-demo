import React, { FC } from 'react';
import { VictoryBoxPlot } from 'victory';
import ExampleBox from '../shared/ExampleBox';

// x, y = statistics pre-calculated (min, median, max, q1, q3)
const data = [
  { x: 1, y: [1, 2, 3, 5] },
  { x: 2, y: [3, 5, 6] },
  { x: 3, y: [8, 2, 7, 4] },
  { x: 4, y: [2, 3, 6] },
  { x: 5, y: [5, 7, 6, 9] },
];

const SimpleBoxPlot: FC = () => {
  return (
    <ExampleBox title="VictoryBoxPlot">
      <VictoryBoxPlot data={data} />
    </ExampleBox>
  );
};

export default SimpleBoxPlot;
