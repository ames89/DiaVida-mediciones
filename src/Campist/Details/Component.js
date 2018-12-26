import React, { Component } from 'reactn';
import { Paper, AppBar, Tabs, Tab, CircularProgress } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import { getCampistById } from '../../Store/firebase/Campists';

import styles from './style.module.scss';
import GeneralInfo from './1-GeneralInfo';

class Details extends Component {
  state = {
    tabPosition: 0,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.global.setHeaderGoBack(true);

    if (
      this.props &&
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      const id = this.props.match.params.id;
      getCampistById(id)
        .then(data => {
          const campistData = data.docSnapshot.data();
          this.setState({ loading: false });
          this.global.setHeaderTitle(
            `${campistData.lastNames}, ${campistData.names}`
          );
          this.global.campistDataSet(data.docSnapshot.data());
        })
        .catch(err => {
          console.error(err);
          this.props.history.push('/app');
        });
    }
  }

  componentWillUnmount() {
    this.global.setHeaderGoBack(false);
  }

  handleTabChange = (e, idx) => {
    if (process.env.NODE_ENV !== 'production') {
      this.setState({ tabPosition: idx });
    }
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
              textColor="primary"
              value={tabPosition}
              fullWidth
            >
              <Tab label="Información general" />
              <Tab label="Diario" />
            </Tabs>
          </AppBar>
          <SwipeableViews axis="x" index={tabPosition}>
            <GeneralInfo />
            <Paper>asd2</Paper>
          </SwipeableViews>
          {this.state.loading && (
            <div className={styles.loader}>
              <CircularProgress disableShrink />
            </div>
          )}
        </Paper>
      </div>
    );
  }
}

export default Details;
