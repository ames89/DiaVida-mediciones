import React from 'reactn';
import { Grid, Typography, TextField } from '@material-ui/core';
import InsulinInput from './insulinInput';
import {
  BREAKFAST,
  LUNCH,
  DINNER,
  CORRECTION_FACTOR
} from '../../../../Store/reducers/campistData';
import { CAMPIST_DATA } from '../../../../Store/reducers/storeNames';

class Ratios extends React.Component {
  setInsulinSchemaValue = type => e => {
    this.global.campistDataSetInsulinSchemaRatioValue(type, e.target.value);
  };

  render() {
    const { insulinSchemaRatio } = this.global[CAMPIST_DATA];

    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h6">Ratios de Insulina</Typography>
        </Grid>
        <InsulinInput
          xs={4}
          label="Desayuno"
          onChange={this.setInsulinSchemaValue(BREAKFAST)}
          value={insulinSchemaRatio[BREAKFAST]}
        />
        <InsulinInput
          xs={4}
          label="Almuerzo"
          onChange={this.setInsulinSchemaValue(LUNCH)}
          value={insulinSchemaRatio[LUNCH]}
        />
        <InsulinInput
          xs={4}
          label="Cena"
          onChange={this.setInsulinSchemaValue(DINNER)}
          value={insulinSchemaRatio[DINNER]}
        />
        <InsulinInput
          xs={12}
          label="Factor de Correccion"
          onChange={this.setInsulinSchemaValue(CORRECTION_FACTOR)}
          value={insulinSchemaRatio[CORRECTION_FACTOR]}
        />
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Comentarios"
            margin="dense"
            multiline
            onChange={this.setInsulinSchemaValue('comment')}
            rows="3"
            value={insulinSchemaRatio.comment}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Ratios;
