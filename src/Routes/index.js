import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { MainRoute, PrivateRoute } from './utils';

import Login from '../Login';
import CampistsAppView from '../Campist';
import Teams from '../Teams';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <MainRoute />} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/campists" component={CampistsAppView} />
      <PrivateRoute path="/teams" component={Teams} />
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

const RoutesContainer = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
export default RoutesContainer;
