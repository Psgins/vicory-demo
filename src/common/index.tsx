import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropAnimate from './PropAnimate';
import PropData from './PropData';
import PropEvents from './PropEvents';
import PropLabels from './PropLabels';
import PropStandalone from './PropStandalone';
import PropStyle from './PropStyle';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(10, 2, 0, 2),
  },
  header: {
    margin: theme.spacing(4, 0),
  },
}));

const CommonUsed: FC = () => {
  const classes = useStyles();
  const examples = [
    <PropData />,
    <PropStyle />,
    <PropEvents />,
    <PropLabels />,
    <PropAnimate />,
    <PropStandalone />,
  ];
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.header} variant="h4">
          Commonly used properties
        </Typography>
        <Grid container>
          {examples.map((example, index) => (
            <Grid item xs={12} key={index}>
              {example}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CommonUsed;
