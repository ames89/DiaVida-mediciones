import React, { Component } from 'reactn';
import PropTypes from 'prop-types';
import { Paper, AppBar, Tabs, Tab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import BasicDetails from './Tabs/1-BasicDetails';
import BasalDosage from './Tabs/2-BasalDosage';

import styles from './style.module.scss';
import InsulinSchema from './Tabs/3-InsulinSchema';

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

  goToPrev = () => {
    this.setState({ tabPosition: this.state.tabPosition - 1 });
  };

  goToNext = () => {
    this.setState({ tabPosition: this.state.tabPosition + 1 });
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
              scrollButtons="on"
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
          >
            <BasicDetails handleSubmit={this.goToNext} />
            <BasalDosage
              handleSubmit={this.goToNext}
              handleBack={this.goToPrev}
            />
            <InsulinSchema handleSubmit={() => {}} />
          </SwipeableViews>
        </Paper>
      </div>
    );
  }
}

export default AddEdit;
