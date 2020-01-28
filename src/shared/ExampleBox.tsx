import React, { FC, ComponentType } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface ExampleBoxProps {
  title?: string;
  width?: number;
  height?: number;
  div?: boolean;
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
  const { children, title, div } = props;
  const CustomType: ComponentType<any> = div
    ? (('div' as unknown) as ComponentType<any>)
    : Paper;
  return (
    <CustomType className={classes.root}>
      {title && <Typography>{title}</Typography>}
      <div>{children}</div>
    </CustomType>
  );
};

export default ExampleBox;
