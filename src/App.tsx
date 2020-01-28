import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bar from './bar';
import Landing from './Landing';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/bar" component={Bar} />
      <Route exact path="/" component={Landing} />
    </Switch>
  );
};

export default App;
