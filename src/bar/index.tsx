import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import BarAnimate from './BarAnimate';
import BarAdjustable from './BarAdjustable';
import BarEvent from './BarEvent';

const Bar: FC = () => {
  return (
    <div>
      <Typography variant="h4">VictoryBar</Typography>
      <Typography variant="h6">Event</Typography>
      <BarEvent />
      <Typography variant="h6">Animate</Typography>
      <BarAnimate />
      <Typography variant="h6">Properties</Typography>
      <BarAdjustable />
    </div>
  );
};

export default Bar;
