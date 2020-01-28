import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryAxis } from 'victory';

const ComponentAxis: FC = () => {
  return (
    <ExampleBox title="VictoryAxis">
      <VictoryAxis />
    </ExampleBox>
  );
};

export default ComponentAxis;
