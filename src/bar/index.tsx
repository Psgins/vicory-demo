import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import BarAdjustable from './BarAdjustable';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(10, 2, 0, 2),
  },
  header: {
    margin: theme.spacing(4, 0),
  },
}));

const Bar: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h4">
        VictoryBar
      </Typography>
      <Typography variant="h6">Properties</Typography>
      <BarAdjustable />
    </div>
  );
};

export default Bar;
