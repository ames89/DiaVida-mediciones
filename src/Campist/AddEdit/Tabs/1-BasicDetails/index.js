import React from 'reactn';
import { Paper, TextField, MenuItem, Button } from '@material-ui/core';

import { COLORS } from '../../../../Constants/colors';
import { CAMPIST_DATA } from '../../../../Store/reducers/storeNames';
import Generic from '../generic';

import styles from './style.module.scss';

class BasicDetails extends Generic {
  render() {
    const textInputClass = styles['text-input'];
    const halfSizeClass = [styles['text-input'], styles['half-size']].join(' ');
    const thirdSizeClass = [styles['text-input'], styles['third-size']].join(
      ' '
    );
    const campistData = this.global[CAMPIST_DATA];

    return (
      <Paper className={styles['component']} elevation={0} square>
        <form onSubmit={this.handleSubmit}>
          <TextField
            className={halfSizeClass}
            label="Nombres"
            margin="dense"
            onChange={this.saveValue('name')}
            required
            type="text"
            value={campistData.name}
          />
          <TextField
            className={halfSizeClass}
            label="Apellidos"
            margin="dense"
            onChange={this.saveValue('lastname')}
            required
            type="text"
            value={campistData.lastname}
          />

          <TextField
            className={thirdSizeClass}
            label="Edad"
            margin="dense"
            onChange={this.saveValue('yearsOld')}
            required
            type="number"
            inputProps={{
              min: 0,
              max: 100,
              step: 1
            }}
            value={campistData.yearsOld}
          />
          <TextField
            className={thirdSizeClass}
            label="Peso"
            margin="dense"
            onChange={this.saveValue('weight')}
            inputProps={{
              min: 0,
              max: 100,
              step: 1
            }}
            required
            type="number"
            value={campistData.weight}
          />
          <TextField
            className={thirdSizeClass}
            label="Seleccione el equipo"
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

          <TextField
            className={textInputClass}
            fullWidth
            label="Medicamentos"
            margin="dense"
            multiline
            onChange={this.saveValue('drugs')}
            rows="3"
            value={campistData.drugs}
          />

          <TextField
            className={textInputClass}
            fullWidth
            label="Alergias"
            margin="dense"
            multiline
            onChange={this.saveValue('allergies')}
            rows="3"
            value={campistData.allergies}
          />

          <Button
            className={styles['button-submit']}
            color="primary"
            size="small"
            variant="contained"
            type="submit"
          >
            Siguiente
          </Button>

          <div className={styles['last']} />
        </form>
      </Paper>
    );
  }
}

export default BasicDetails;
