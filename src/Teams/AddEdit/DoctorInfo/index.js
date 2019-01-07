import React from 'reactn';
import { Paper, TextField, Button, Grid } from '@material-ui/core';

import styles from './style.module.scss';
import { DOCTOR_DATA } from '../../../Store/reducers/storeNames';

class DoctorInfo extends React.Component {
  componentDidMount() {
    this.global.initDoctorData();
  }

  saveValue = item => e => {
    this.global.doctorDataSetValue(item, e.target.value);
  };

  render() {
    const doctorData = this.global[DOCTOR_DATA];

    return (
      <Paper className={styles['component']} elevation={0} square>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Nombres"
                margin="dense"
                onChange={this.saveValue('names')}
                required
                type="text"
                value={doctorData.names}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Apellidos"
                margin="dense"
                onChange={this.saveValue('lastNames')}
                required
                type="text"
                value={doctorData.lastNames}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Telefono"
                margin="dense"
                onChange={this.saveValue('phone')}
                required
                type="tel"
                value={doctorData.phone}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email"
                margin="dense"
                onChange={this.saveValue('email')}
                required
                type="email"
                value={doctorData.email}
              />
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }
}

export default DoctorInfo;
