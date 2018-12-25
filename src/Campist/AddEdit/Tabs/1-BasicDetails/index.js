import React from 'reactn';
import { Paper, TextField, MenuItem, Button, Grid } from '@material-ui/core';

import { COLORS } from '../../../../Constants/colors';
import { CAMPIST_DATA } from '../../../../Store/reducers/storeNames';
import Generic from '../generic';

import styles from './style.module.scss';

class BasicDetails extends Generic {
  render() {
    const campistData = this.global[CAMPIST_DATA];

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
                value={campistData.names}
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
                value={campistData.lastNames}
              />
            </Grid>
            <Grid item xs={4}>
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
                value={campistData.age}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Peso"
                margin="dense"
                onChange={this.saveValue('weight')}
                inputProps={{
                  min: 0,
                  step: 1
                }}
                required
                type="number"
                value={campistData.weight}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Equipo"
                margin="dense"
                onChange={this.saveValue('team')}
                required
                select
                value={campistData.team}
              >
                {Object.keys(COLORS).map(color => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Medicamentos"
                margin="dense"
                multiline
                onChange={this.saveValue('drugs')}
                rows="3"
                value={campistData.drugs}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Alergias"
                margin="dense"
                multiline
                onChange={this.saveValue('allergies')}
                rows="3"
                value={campistData.allergies}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    type="submit"
                  >
                    Siguiente
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }
}

export default BasicDetails;
