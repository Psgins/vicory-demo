import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(10, 2, 0, 2),
  },
  header: {
    margin: theme.spacing(4, 0),
  },
}));

const Playground: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h4">
        Playground
      </Typography>
      <ExampleBox width={450} height={300}></ExampleBox>
    </div>
  );
};

export default Playground;
