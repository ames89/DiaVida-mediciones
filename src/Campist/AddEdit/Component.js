import React, { Component } from 'reactn';
import PropTypes from 'prop-types';
import { Paper, AppBar, Tabs, Tab, CircularProgress } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import SuccessSnackbar from '../../common/SuccessSnackbar';

import BasicDetails from './Tabs/1-BasicDetails';
import BasalDosage from './Tabs/2-BasalDosage';
import InsulinSchema from './Tabs/3-InsulinSchema';
import FoodPortions from './Tabs/4-FoodPortions';

import { addCampist, getCampistById } from '../../Store/firebase/Campists';
import { CAMPIST_DATA } from '../../Store/reducers/storeNames';

import styles from './style.module.scss';

class AddEdit extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    tabPosition: 0,
    openSnack: false,
    isDisabledSubmit: false,
    loading: false
  };

  componentDidMount() {
    this.global.initCampistData();
    if (
      this.props &&
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      const id = this.props.match.params.id;
      this.setState({ loading: true });
      this.global.setHeaderTitle('Editar campista');
      getCampistById(id)
        .then(data => {
          this.document = data.doc;
          this.global.campistDataSet(data.docSnapshot.data());
          this.setState({ loading: false });
        })
        .catch(err => {
          console.error(err);
          this.props.history.push('/app');
        });
    } else {
      this.global.setHeaderTitle('Agregar campista');
    }
  }

  handleTabChange = (e, idx) => {
    if (process.env.NODE_ENV !== 'production') {
      this.setState({ tabPosition: idx });
    }
  };

  onCloseSnackbar = () => {
    this.setState({ openSnack: false });
  };

  goToPrev = () => {
    this.setState({ tabPosition: this.state.tabPosition - 1 });
  };

  goToNext = () => {
    this.setState({ tabPosition: this.state.tabPosition + 1 });
  };

  submitData = () => {
    this.setState({ isDisabledSubmit: true });
    let promise;
    if (this.document) {
      promise = this.document.update(this.global[CAMPIST_DATA]);
    } else {
      promise = addCampist(this.global[CAMPIST_DATA]).then(() => {
        this.global.initCampistData();
        this.setState({
          tabPosition: 0
        });
      });
    }
    promise
      .finally(() => {
        this.setState({ isDisabledSubmit: false, openSnack: true });
      })
      .catch(e => {
        console.error('error', e);
      });
  };

  render() {
    const { tabPosition } = this.state;

    return (
      <div>
        <Paper className={styles['container-app-bar']} elevation={12} square>
          <AppBar position="static" color="default">
            <Tabs
              indicatorColor="primary"
              onChange={this.handleTabChange}
              variant="scrollable"
              scrollButtons="on"
              textColor="primary"
              value={tabPosition}
            >
              <Tab label="Detalles Básicos" />
              <Tab label="Dosis basal" />
              <Tab label="Esquema de Insulina" />
              <Tab label="Porciones de Alimentos" />
            </Tabs>
          </AppBar>
          <SwipeableViews axis="x" index={tabPosition}>
            <BasicDetails handleSubmit={this.goToNext} />
            <BasalDosage
              handleSubmit={this.goToNext}
              handleBack={this.goToPrev}
            />
            <InsulinSchema
              handleBack={this.goToPrev}
              handleSubmit={this.goToNext}
            />
            <FoodPortions
              handleBack={this.goToPrev}
              handleSubmit={this.submitData}
              isDisabledSubmit={this.state.isDisabledSubmit}
            />
          </SwipeableViews>
          {this.state.loading && (
            <div className={styles.loader}>
              <CircularProgress disableShrink />
            </div>
          )}
        </Paper>
        <SuccessSnackbar
          onClose={this.onCloseSnackbar}
          isOpen={this.state.openSnack}
          message={
            this.props.match.params.id
              ? 'El campista se ha actualizado correctamente'
              : 'El campista se ha almacenado correctamente'
          }
        />
      </div>
    );
  }
}

export default AddEdit;
