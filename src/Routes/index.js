import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MainRoute, PrivateRoute } from './utils';

import Login from '../Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <MainRoute />} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/app" component={() => <h1>prot</h1>} />
    </Switch>
  );
};

export default () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
