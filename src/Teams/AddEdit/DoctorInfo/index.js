import React from 'reactn';
import { Paper, TextField, Grid, Typography, Fab } from '@material-ui/core';

import { DOCTOR_DATA } from '../../../Store/reducers/storeNames';
import { Add } from '@material-ui/icons';
import styles from './style.module.scss';
import DutyDays from './DutyDays';

class DoctorInfo extends React.Component {
  static defaultProps = {
    isEditable: false
  };

  saveValue = item => e => {
    this.global.doctorDataSetValue(item, e.target.value);
  };

  addDutyDay = () => {
    this.global.doctorDataAddDutyDay();
  };

  render() {
    const { isEditable } = this.props;
    const doctorData = this.global[DOCTOR_DATA];

    return (
      <Paper elevation={0} square>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <TextField
              disabled={!isEditable}
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
              disabled={!isEditable}
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
              disabled={!isEditable}
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
              disabled={!isEditable}
              fullWidth
              label="Email"
              margin="dense"
              onChange={this.saveValue('email')}
              required
              type="email"
              value={doctorData.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled={!isEditable}
              fullWidth
              label="Especialidad"
              margin="dense"
              onChange={this.saveValue('speciality')}
              required
              type="text"
              value={doctorData.speciality}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="primary"
              variant="body1"
              className={styles['title-separator']}
            >
              Guardias
            </Typography>
          </Grid>
          <DutyDays isEditable={isEditable} />
          {isEditable && (
            <Grid item xs={12}>
              <Fab
                disabled={!isEditable}
                size="small"
                color="primary"
                aria-label="Add"
                onClick={this.addDutyDay}
              >
                <Add />
              </Fab>
            </Grid>
          )}
        </Grid>
      </Paper>
    );
  }
}

export default DoctorInfo;
