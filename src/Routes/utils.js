import React from 'reactn';
import { Redirect, Route } from 'react-router-dom';

import fb from '../Store/firebase';
import Loading from '../common/Loading';
import isAdmin from '../utils/isAdmin';

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

class AdminLoader extends React.Component {
  state = { loading: true };

  componentDidMount() {
    isAdmin().then(res => {
      if (res) {
        this.setState({ loading: false });
      } else {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    const { Component } = this.props;
    const { loading } = this.state;
    if (loading) return <Loading />;
    return <Component {...this.props} />;
  }
}

export const AdminRoute = ({ component: RouteComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (fb.auth().currentUser && fb.auth()) {
          return <AdminLoader Component={RouteComponent} {...props} />;
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
          return <Redirect to="/campists" />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};
