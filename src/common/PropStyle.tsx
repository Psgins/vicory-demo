import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExampleBox from '../shared/ExampleBox';
import { VictoryBar } from 'victory';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const data = [
  { x: 1, y: 1, label: 'y1' },
  { x: 2, y: 5, label: 'y5' },
  { x: 3, y: 4, label: 'y4' },
  { x: 4, y: 6, label: 'y6' },
  { x: 5, y: 9, label: 'y9' },
];

const PropStyle: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      style
      <ExampleBox div height={300} width={450}>
        <VictoryBar
          data={data}
          style={{
            parent: {
              background:
                'linear-gradient(to bottom, #ffccff 0%, #ffffff 100%)',
            },
            data: {
              fill: '#6600cc',
              stroke: '#cc33ff',
              strokeWidth: '5',
            },
            labels: {
              fill: '#ff0000',
            },
          }}
        />
      </ExampleBox>
    </div>
  );
};

export default PropStyle;
