import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

interface ExampleBoxProps {
  title?: string;
  width?: number;
  height?: number;
}

const useStyles = makeStyles(theme => ({
  root: ({ width, height }: ExampleBoxProps) => ({
    width: width || '100%',
    height: height || '100%',
    padding: theme.spacing(2),
  }),
  title: {
    padding: theme.spacing(1, 0),
    textAlign: 'center',
  },
  options: {
    marginTop: theme.spacing(3),
  },
}));

const ExampleBox: FC<ExampleBoxProps> = props => {
  const classes = useStyles(props);
  const { children, title } = props;
  return (
    <Paper className={classes.root}>
      {title && <Typography>{title}</Typography>}
      <div>{children}</div>
    </Paper>
  );
};

export default ExampleBox;
