import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CommonUsed from './common';
import playground from './playground';
import Bar from './bar';
import Landing from './Landing';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  toolbar: {
    '& > *': {
      marginRight: theme.spacing(2),
    },
  },
  link: {
    color: theme.palette.common.white,
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Link
            className={classes.link}
            component={RouterLink}
            to="/"
            variant="button"
          >
            VICTORY DEMO
          </Link>
          <span>|</span>
          <Link
            className={classes.link}
            component={RouterLink}
            to="/common"
            variant="button"
          >
            Commonly Usage Properties
          </Link>
          <span>|</span>
          <Link
            className={classes.link}
            component={RouterLink}
            to="/playground"
            variant="button"
          >
            Playground
          </Link>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/common" component={CommonUsed} />
        <Route path="/playground" component={playground} />
        <Route path="/bar" component={Bar} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </>
  );
};

export default App;
