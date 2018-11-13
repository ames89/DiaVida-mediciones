import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import fb from '../Store/firebase';

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (fb.auth().currentUser) {
          return <RouteComponent {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

export const MainRoute = () => {
  return (
    <Route
      exact
      path="/"
      render={() => {
        if (fb.auth().currentUser) {
          return <Redirect to="/app" />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};
