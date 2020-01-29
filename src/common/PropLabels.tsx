import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExampleBox from '../shared/ExampleBox';
import { VictoryBar, VictoryTooltip } from 'victory';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const PropLabels: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      labels + labelComponent
      <ExampleBox div height={300} width={450}>
        <VictoryBar
          data={data}
          labels={({ datum }) => `customize: ${datum.y}`}
        />
      </ExampleBox>
      <ExampleBox div height={300} width={450}>
        <VictoryBar
          data={data}
          labels={({ datum }) => `customize: ${datum.y}`}
          labelComponent={<VictoryTooltip />}
        />
      </ExampleBox>
    </div>
  );
};

export default PropLabels;
