import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import List from '../List';
import AddEdit from '../AddEdit';

const Routes = props => {
  return (
    <Switch>
      <Route path="/app/" exact component={List} />
      <Route path="/app/new-campist" exact component={AddEdit} />
      <Route path="/app/edit/:id" component={AddEdit} />
      <Route>
        <Redirect to="/app" />
      </Route>
    </Switch>
  );
};

export default Routes;
