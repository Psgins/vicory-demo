import React, { FC } from 'react';
import ExampleBox from '../shared/ExampleBox';
import { VictoryLegend } from 'victory';

const data = [{ name: 'name 1' }, { name: 'name 2' }, { name: 'name 3' }];
const style = { border: { stroke: 'black' }, title: { fontSize: 20 } } as any;

const ComponentLegend: FC = () => {
  return (
    <ExampleBox title="VictoryLegend">
      <VictoryLegend title="Here is title" data={data} style={style} />
    </ExampleBox>
  );
};

export default ComponentLegend;
