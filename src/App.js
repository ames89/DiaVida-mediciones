import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import Login from './Login';
import Loading from './common/Loading';

import fb from './Store/firebase';

import styles from './App.module.scss';

const loadUserData = LocalComponent => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = { loading: true };
    }

    componentDidMount() {
      fb.auth().onAuthStateChanged(user => {
        this.setState({ loading: false });
      });
    }

    render() {
      const { loading } = this.state;
      if (loading) {
        return <Loading />;
      }
      return <LocalComponent />;
    }
  };
};

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
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

const MainRoute = () => {
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

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route exact path="/" render={() => <MainRoute />} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/app" component={() => <h1>prot</h1>} />
        </Switch>
      </div>
    </Router>
  );
};

export default loadUserData(App);
