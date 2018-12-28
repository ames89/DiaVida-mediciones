import React, { Component } from 'reactn';
import {
  Paper,
  AppBar,
  Tabs,
  Tab,
  CircularProgress,
  Grid,
  IconButton
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import { getCampistById } from '../../Store/firebase/Campists';

import styles from './style.module.scss';
import GeneralInfo from './1-GeneralInfo';
import { Delete, Edit } from '@material-ui/icons';
import { CAMPIST_DATA } from '../../Store/reducers/storeNames';

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
          if (!data.docSnapshot.exists) {
            throw new Error('the campist does not exists');
          }
          const campistData = data.docSnapshot.data();
          this.document = data.doc;
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

  handleClickEdit = () => {
    const id = this.props.match.params.id;
    const { history } = this.props;
    history.push(`/app/campist/edit/${id}`);
  };

  handleClickDelete = () => {
    const { history } = this.props;
    this.global.campistDataSetValue('deleted', true);
    this.setState({ loading: true });
    this.document.update(this.global[CAMPIST_DATA]).then(() => {
      this.setState({ loading: false });
      history.push('/app');
    });
  };

  render() {
    const { tabPosition } = this.state;

    return (
      <Paper className={styles['container']} elevation={12} square>
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
        <Grid
          className={styles['buttons-options']}
          container
          justify="flex-start"
          spacing={8}
        >
          <Grid item>
            <IconButton
              onClick={this.handleClickDelete}
              className={styles['button-delete']}
            >
              <Delete />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={this.handleClickEdit} color="secondary">
              <Edit />
            </IconButton>
          </Grid>
        </Grid>
        {this.state.loading && (
          <div className={styles.loader}>
            <CircularProgress disableShrink />
          </div>
        )}
      </Paper>
    );
  }
}

export default Details;
