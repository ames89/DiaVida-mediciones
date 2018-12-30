import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import List from '../List';
import AddEdit from '../AddEdit';
import Details from '../Details';
import LogFood from '../Logs/Food/Component';

const Routes = () => {
  return (
    <Switch>
      <Route path="/app/" exact component={List} />
      <Route path="/app/campist/new" exact component={AddEdit} />
      <Route path="/app/campist/edit/:id" component={AddEdit} />
      <Route path="/app/campist/:id/add-food" component={LogFood} />
      <Route path="/app/campist/:id/add-medition" component={AddEdit} />
      <Route path="/app/campist/:id/add-injection" component={AddEdit} />
      <Route path="/app/campist/:id" component={Details} />
      <Route>
        <Redirect to="/app" />
      </Route>
    </Switch>
  );
};

export default Routes;
