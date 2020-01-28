import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CommonUsed from './common';
import Bar from './bar';
import Landing from './Landing';

const App: React.FC = () => {
  return (
    <>
      <AppBar>
        <Toolbar>VICTORY DEMO</Toolbar>
      </AppBar>
      <Switch>
        <Route path="/common" component={CommonUsed} />
        <Route path="/bar" component={Bar} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </>
  );
};

export default App;
