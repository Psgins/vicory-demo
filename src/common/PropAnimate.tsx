import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const PropAnimate: FC = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default PropAnimate;
