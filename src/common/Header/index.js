import React, { Component } from 'reactn';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

// import styles from './style.module.scss'

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string
  };
  static defaultProps = {
    title: ''
  };

  render() {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
