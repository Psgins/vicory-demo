import React, { FC, useState, ChangeEvent } from 'react';
import { VictoryBar, VictoryChart, VictoryBarProps } from 'victory';
import { Select, MenuItem, Slider, makeStyles } from '@material-ui/core';
import ExampleBox from '../shared/ExampleBox';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 9 },
];

interface op {
  alignment: VictoryBarProps['alignment'][];
}

const OPTIONS = {
  alignment: ['start', 'middle', 'end'],
};

const useStyles = makeStyles(theme => ({
  box: {
    width: 500,
    height: 500,
  },
}));

const BarAdjustable: FC = () => {
  const classes = useStyles();

  const [options, setOptions] = useState<VictoryBarProps>({
    alignment: 'start',
    barRatio: 1,
    // barWidth: ({ barRatio }: any) => {
    //   return barRatio * 32;
    // },
    cornerRadius: 0,
  });

  const handleSelectOnChange = (propName: string) => (
    e: ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    setOptions({ ...options, [propName]: e.target.value });
  };

  const handleSliderOnChange = (name: string) => (
    e: ChangeEvent<{}>,
    value: number | number[],
  ) => {
    setOptions({ ...options, [name]: value });
  };

  return (
    <div className={classes.box}>
      <ExampleBox>
        <VictoryChart>
          <VictoryBar
            data={data}
            // domain={{ x: [-5, 5], y: [0, 10] }}
            // domainPadding={{ x: [0, 2], y: 0 }}
            // padding={{ top: 40, left: 0, bottom: 0, right: 0 }}
            y0={1}
            {...options}
          />
        </VictoryChart>

        <div>
          alignment:
          <Select
            value={options.alignment}
            onChange={handleSelectOnChange('alignment')}
          >
            {OPTIONS.alignment.map(value => (
              <MenuItem key={'alignment' + value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          barRadio [{options.barRatio}]:
          <Slider
            value={options.barRatio}
            onChange={handleSliderOnChange('barRatio')}
            min={0}
            max={3}
            step={0.02}
          />
        </div>
        <div>
          CornerRadius [{options.cornerRadius}]:
          <Slider
            value={options.cornerRadius as number}
            onChange={handleSliderOnChange('cornerRadius')}
            min={0}
            max={20}
            step={0.5}
          />
        </div>
      </ExampleBox>
    </div>
  );
};

export default BarAdjustable;
