import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'unorm';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { indigo, lightBlue } from '@material-ui/core/colors';

import './Store/reducers';

require('dotenv').config();

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: lightBlue
  },
  status: {
    danger: 'orange'
  },
  typography: {
    useNextVariants: true
  }
});

const render = () => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    document.getElementById('root')
  );
};
render();

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
