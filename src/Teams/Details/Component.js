import React, { Component } from 'reactn';
import { Paper, CircularProgress } from '@material-ui/core';

import styles from './style.module.scss';
import { getDoctorById } from '../../Store/firebase/Doctors';
import { getStaffById } from '../../Store/firebase/Staff';

class Details extends Component {
  state = {
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
      const { type, id } = this.props.match.params;
      let promise;
      this.global.setHeaderTitle('Detalles del ' + type);
      if (type === 'doctor') {
        promise = getDoctorById(id).then(data => {
          if (!data.docSnapshot.exists) {
            throw new Error('does not exists');
          }
          this.global.campistDataSet(data.docSnapshot.data());
        });
      } else {
        promise = getStaffById(id).then(data => {
          if (!data.docSnapshot.exists) {
            throw new Error('does not exists');
          }
          this.global.doctorDataSet(data.docSnapshot.data());
        });
      }
      promise
        .finally(() => {
          this.setState({ loading: false });
        })
        .catch(err => {
          console.error(err);
          this.props.history.push('/teams');
        });
    } else {
      this.props.history.push('/campists');
    }
  }

  componentWillUnmount() {
    this.global.setHeaderGoBack(false);
  }

  handleTabChange = (e, idx) => {
    this.setState({ tabPosition: idx });
  };

  render() {
    const { type, id } = this.props.match.params;

    return (
      <Paper className={styles['container']} elevation={12} square>
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
