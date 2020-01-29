import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExampleBox from '../shared/ExampleBox';
import { VictoryBar } from 'victory';

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

const PropStandalone: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      standalone
      <ExampleBox div height={300} width={450}>
        <VictoryBar data={data} />
      </ExampleBox>
      <ExampleBox div height={300} width={450}>
        <svg viewBox="0 0 450 300">
          <VictoryBar data={data} standalone={false} />
        </svg>
      </ExampleBox>
    </div>
  );
};

export default PropStandalone;
