import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryPolarAxis } from 'victory';

const ComponentPolarAxis: FC = () => {
  return (
    <ExampleBox title="VictoryPolarAxis">
      <VictoryPolarAxis />
    </ExampleBox>
  );
};

export default ComponentPolarAxis;
