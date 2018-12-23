import React, { Component } from 'reactn';
import PropTypes from 'prop-types';
import { Paper, AppBar, Tabs, Tab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import BasicDetails from './Tabs/BasicDetails';

import styles from './style.module.scss';

class AddEdit extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    tabPosition: 0
  };

  componentDidMount() {
    if (
      this.props &&
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      this.global.setHeaderTitle('Editar campista');
    } else {
      this.global.setHeaderTitle('Agregar campista');
    }
  }

  handleChange = (e, idx) => {
    this.setState({ tabPosition: idx });
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <div>
        <Paper className={styles['container-app-bar']} elevation={12} square>
          <AppBar position="static" color="default">
            <Tabs
              indicatorColor="primary"
              onChange={this.handleChange}
              scrollable
              scrollButtons="auto"
              textColor="primary"
              value={tabPosition}
            >
              <Tab label="Detalles Básicos" />
              <Tab label="Dosis basal" />
              <Tab label="Esquema de Insulina" />
              <Tab label="Porción de Alimentos" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis="x"
            className={styles['swipe-container']}
            index={tabPosition}
            onChangeIndex={this.handleChange}
          >
            <BasicDetails handle />
            <Paper>Item Two</Paper>
            <Paper>Item Three</Paper>
          </SwipeableViews>
        </Paper>
      </div>
    );
  }
}

export default AddEdit;
