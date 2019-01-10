import React from 'reactn';
import {
  Paper,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  NativeSelect
} from '@material-ui/core';

import { STAFF_DATA } from '../../../Store/reducers/storeNames';
import { COLORS } from '../../../Constants/colors';
import { STAFF_RANKS } from '../../../Store/reducers/staffData';

class StaffInfo extends React.Component {
  componentDidMount() {
    this.global.initStaffData();
  }

  saveValue = item => e => {
    this.global.staffDataSetValue(item, e.target.value);
  };

  render() {
    const staffData = this.global[STAFF_DATA];

    return (
      <Paper elevation={0} square>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Nombres"
              margin="dense"
              onChange={this.saveValue('names')}
              required
              type="text"
              value={staffData.names}
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
              value={staffData.lastNames}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              margin="dense"
              onChange={this.saveValue('email')}
              required
              type="email"
              value={staffData.email}
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
              value={staffData.phone}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Edad"
              margin="dense"
              onChange={this.saveValue('age')}
              required
              type="number"
              inputProps={{
                min: 0,
                step: 1
              }}
              value={staffData.age}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="dense">
              <InputLabel>Equipo</InputLabel>
              <NativeSelect
                value={staffData.team}
                onChange={this.saveValue('team')}
              >
                <option value="" />
                {Object.keys(COLORS).map(color => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="dense">
              <InputLabel>Rango</InputLabel>
              <NativeSelect
                value={staffData.rank}
                onChange={this.saveValue('rank')}
              >
                <option value="" />
                {Object.keys(STAFF_RANKS).map(rank => (
                  <option key={rank} value={rank}>
                    {STAFF_RANKS[rank]}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default StaffInfo;
