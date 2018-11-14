import React from 'react';
import { Route, Switch } from 'react-router-dom';

import List from '../List';

const Routes = props => {
  return (
    <Switch>
      <Route path="/app/" exact component={List} />
    </Switch>
  );
};

export default Routes;
