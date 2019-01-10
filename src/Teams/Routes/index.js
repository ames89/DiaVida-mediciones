import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import List from '../List';
import AddEdit from '../AddEdit';
import { AdminRoute } from '../../Routes/utils';
// import Details from '../Details';

// TODO: hacer
// <Route path="/teams/edit/:id" component={AddEdit} />
// <Route path="/teams/:id" component={Details} />

const Routes = () => {
  return (
    <Switch>
      <Route path="/teams/" exact component={List} />
      <AdminRoute path="/teams/new" exact component={AddEdit} />
      <Route path="/teams/*">
        <Redirect to="/teams" />
      </Route>
    </Switch>
  );
};

export default Routes;
