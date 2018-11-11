import React from 'react';
import Loadable from 'react-loadable';

const Login = Loadable({
  loader: () => import('./Component'),
  loading: () => <h1>Loading</h1>
});
export default Login;
