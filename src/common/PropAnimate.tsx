import React, { FC, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExampleBox from '../shared/ExampleBox';
import { VictoryBar } from 'victory';

const data = [
  [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
    { x: 4, y: 4 },
    { x: 5, y: 5 },
  ],
  [
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 3 },
    { x: 4, y: 2 },
    { x: 5, y: 1 },
  ],
  [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 2 },
    { x: 4, y: 5 },
    { x: 5, y: 9 },
  ],
  [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 2 },
    { x: 4, y: 5 },
  ],
];

const useStyles = makeStyles(theme => ({
  root: {},
}));

const PropAnimate: FC = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1 >= data.length ? 0 : prevIndex + 1));
    }, 3000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className={classes.root}>
      animate
      <ExampleBox div height={300} width={450}>
        <VictoryBar
          animate={{ duration: 1000, easing: 'exp' }}
          data={data[index]}
        />
      </ExampleBox>
    </div>
  );
};

export default PropAnimate;
