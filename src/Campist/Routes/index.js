import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// campists section
import CampistsList from '../List';
import AddEdit from '../AddEdit';
import Details from '../Details';
import LogFood from '../Logs/Food/Component';
import LogInjection from '../Logs/Injection/Component';
import LogMedition from '../Logs/Medition/Component';

// Staff section

const Routes = () => {
  return (
    <Switch>
      <Route path="/campists/" exact component={CampistsList} />
      <Route path="/campists/new" exact component={AddEdit} />
      <Route path="/campists/edit/:id" component={AddEdit} />
      <Route path="/campists/:id/add-food" component={LogFood} />
      <Route path="/campists/:id/add-injection" component={LogInjection} />
      <Route path="/campists/:id/add-medition" component={LogMedition} />
      <Route path="/campists/:id" component={Details} />
      <Route path="/campists/*">
        <Redirect to="/campists" />
      </Route>
    </Switch>
  );
};

export default Routes;
