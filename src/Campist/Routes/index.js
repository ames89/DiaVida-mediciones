import React from 'react';
import { Route, Switch } from 'react-router-dom';

import List from '../List';

const Routes = props => {
  return (
    <Switch>
      <Route path="/app/" exact component={List} />
      <Route
        path="/app/new-campist"
        exact
        render={() => {
          return <h1>asd</h1>;
        }}
      />
    </Switch>
  );
};

export default Routes;
