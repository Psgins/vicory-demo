import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { VictoryBar } from 'victory';
import ExampleBox from '../shared/ExampleBox';

const data = [
  { somethingA: 1, somethingB: 1, label: 'label1' },
  { somethingA: 2, somethingB: 5, label: 'label5' },
  { somethingA: 3, somethingB: 4, label: 'label4' },
  { somethingA: 4, somethingB: 6, label: 'label6' },
  { somethingA: 5, somethingB: 9, label: 'label9' },
];

const useStyles = makeStyles(theme => ({
  root: {},
}));

const PropData: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Data
      <ExampleBox div height={300} width={450}>
        <VictoryBar data={data} x="somethingA" y="somethingB" />
      </ExampleBox>
    </div>
  );
};

export default PropData;
