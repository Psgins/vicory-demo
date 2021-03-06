import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SimpleBar from './SimpleBar';
import SimpleLine from './SimpleLine';
import SimpleScatter from './SimpleScatter';
import SimplePie from './SimplePie';
import SimpleArea from './SimpleArea';
import SimpleBoxPlot from './SimpleBoxPlot';
import Group from './Group';
import GroupStack from './GroupStack';
import ComponentAxis from './ComponentAxis';
import ComponentPolarAxis from './ComponentPolarAxis';
import ContainerVictory from './ContainerVictory';
import ComponentLabel from './ComponentLabel';
import ComponentLegend from './ComponentLegend';
import ComponentTooltip from './ComponentTooltip';
import ContainerDefault from './ContainerDefault';
import ContainerCursor from './ContainerCursor';
import ContainerZoom from './ContainerZoom';
import ContainerBrush from './ContainerBrush';
import ContainerVoronoi from './ContainerVoronoi';
import ContainerCreateContainer from './ContainerCreateContainer';
import ExampleChartMixUp from './ExampleChartMixUp';
import ExampleContainerMixUp from './ExampleContainerMixUp';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(10, 2, 0, 2),
  },
  header: {
    margin: theme.spacing(4, 0),
  },
}));

const Landing: FC = () => {
  const classes = useStyles();
  const charts = [
    <SimpleBar />,
    <SimpleLine />,
    <SimpleScatter />,
    <SimplePie />,
    <SimpleArea />,
    <SimpleBoxPlot />,
    <ExampleChartMixUp />,
  ];
  const chartComponents = [
    <ComponentAxis />,
    <ComponentPolarAxis />,
    <ComponentLabel />,
    <ComponentLegend />,
    <ComponentTooltip />,
    <ExampleContainerMixUp />,
  ];
  const chartGroup = [<Group />, <GroupStack />];
  const chartContainer = [
    <ContainerVictory />,
    <ContainerDefault />,
    <ContainerZoom />,
    <ContainerBrush />,
    <ContainerVoronoi />,
    <ContainerCreateContainer />,
    <ContainerCursor />,
  ];
  const unsupportedByTypes = [
    'victory-polar-axis',
    'victory-candlestick',
    'victory-errorbar',
    'victory-voronoi',
    'VictorySelectionContainer',
    'victory-brush-line',
  ];
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.header} variant="h4">
          Chart
        </Typography>
        <Grid container spacing={1}>
          {charts.map((chart, index) => (
            <Grid key={index} item md={3}>
              {chart}
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <Typography className={classes.header} variant="h4">
          Chart Component
        </Typography>
        <Grid container spacing={1}>
          {chartComponents.map((chart, index) => (
            <Grid key={index} item md={3}>
              {chart}
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <Typography className={classes.header} variant="h4">
          Chart Group
        </Typography>
        <Grid container spacing={1}>
          {chartGroup.map((chart, index) => (
            <Grid key={index} item md={3}>
              {chart}
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <Typography className={classes.header} variant="h4">
          Chart Container
        </Typography>
        <Grid container spacing={1}>
          {chartContainer.map((chart, index) => (
            <Grid key={index} item md={3}>
              {chart}
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <Typography className={classes.header} variant="h4">
          Component (Non-support by TypeScript **yet**)
        </Typography>
        <Grid container spacing={1}>
          {unsupportedByTypes.map((chart, index) => (
            <Grid key={index} item xs={12}>
              {chart}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Landing;
