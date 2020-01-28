import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryBar, VictoryLine, VictoryScatter } from 'victory';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const ExampleChartMixUp: FC = () => {
  return (
    <ExampleBox title="Example svg+circle+bar+scatter+line">
      <svg width="100%" height="100%" viewBox="0 0 450 300">
        <circle cx={75} cy={75} r={30} stroke="green" fill="transparent" />
        <VictoryBar data={data} standalone={false} />
        <g role="presentation">
          <VictoryLine
            data={data}
            standalone={false}
            style={{ data: { stroke: 'purple' } }}
          />
          <VictoryScatter
            data={data}
            standalone={false}
            style={{ data: { fill: 'red' } }}
          />
        </g>
      </svg>
    </ExampleBox>
  );
};

export default ExampleChartMixUp;
