import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './Login';

import styles from './App.module.scss';

function PrivateRoute({
  component: RouteComponent,
  ...rest
}: {
  component: any
}) {
  return (
    <Route
      {...rest}
      render={props =>
        // TODO fakeAuth.isAuthenticated ? (
        false ? (
          <RouteComponent {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login}
          render={()=>{
            
          }}
          />
          <PrivateRoute path="/app" component={<h1>prot</h1>} />
        </div>
      </Router>
    );
  }
}

export default App;
