import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryBar, VictoryBarProps } from 'victory';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const BarEvent: FC = () => {
  const events: VictoryBarProps['events'] = [
    {
      target: 'data',
      eventHandlers: {
        onClick: event => {
          return [
            {
              target: 'data',
              mutation: ({ style }) => {
                return {
                  style: style.fill === 'tomato' ? {} : { fill: 'tomato' },
                };
              },
            },
          ];
        },
      },
    },
  ];
  return (
    <ExampleBox width={500} height={350}>
      <VictoryBar data={data} events={events} />
    </ExampleBox>
  );
};

export default BarEvent;
