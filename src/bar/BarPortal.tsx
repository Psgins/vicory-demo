import React, { FC, useRef, useState } from 'react';
import ExampleBox from '../shared/ExampleBox';
import {
  VictoryBar,
  VictoryPortal,
  VictoryLabel,
  VictoryContainer,
} from 'victory';
import PortalWrapper from './PortalWrapper';
import Portal from '@material-ui/core/Portal';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

const BarPortal: FC = () => {
  const [ref, setRef] = useState(null);
  return (
    <ExampleBox width={500} height={350}>
      <VictoryBar
        labels={({ datum }) => datum.y}
        labelComponent={<PortalWrapper forwardRef={ref} />}
        containerComponent={<VictoryContainer containerRef={setRef} />}
        data={data}
      />
    </ExampleBox>
  );
};

export default BarPortal;
