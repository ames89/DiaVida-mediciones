import React, { Component } from 'reactn';
import PropTypes from 'prop-types';
import { Paper, Fab, AppBar, Tabs, Tab } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';

import styles from './style.module.scss';
import isAdmin from '../../utils/isAdmin';
import StaffList from './StaffList';
import DoctorsList from './DoctorsList';

class List extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
    isAdmin: false,
    tabPosition: 0
  };

  componentDidMount() {
    this.global.setHeaderTitle('Personal');
    isAdmin().then(res => this.setState({ isAdmin: res }));
  }

  handleAdd = () => {
    const { history } = this.props;
    history.push('/teams/new');
  };

  handleTabChange = (e, idx) => {
    this.setState({ tabPosition: idx });
  };

  render() {
    const { isAdmin, tabPosition } = this.state;
    return (
      <div>
        <Paper className={styles['container-paper']} square elevation={12}>
          <AppBar position="static" color="default">
            <Tabs
              indicatorColor="primary"
              onChange={this.handleTabChange}
              variant="fullWidth"
              textColor="primary"
              value={tabPosition}
            >
              <Tab label="Personal de Apoyo" />
              <Tab label="Personal Médico" />
            </Tabs>
          </AppBar>
          <SwipeableViews axis="x" index={tabPosition}>
            <StaffList />
            <DoctorsList />
          </SwipeableViews>
        </Paper>
        {isAdmin && (
          <Fab
            className={styles['fab-button']}
            color="primary"
            onClick={this.handleAdd}
          >
            <AddIcon />
          </Fab>
        )}
      </div>
    );
  }
}

export default List;
