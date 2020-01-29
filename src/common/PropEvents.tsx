import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { VictoryBar } from 'victory';
import ExampleBox from '../shared/ExampleBox';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const useStyles = makeStyles(theme => ({
  root: {},
}));

const PropEvents: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      events
      <ExampleBox div height={300} width={450}>
        <VictoryBar
          data={data}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onClick: event => {
                  // do something here eg.calculation
                  return [
                    {
                      target: 'data',
                      mutation: ({ style }) => {
                        return {
                          style:
                            style.fill === 'tomato' ? {} : { fill: 'tomato' },
                        };
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
      </ExampleBox>
    </div>
  );
};

export default PropEvents;
