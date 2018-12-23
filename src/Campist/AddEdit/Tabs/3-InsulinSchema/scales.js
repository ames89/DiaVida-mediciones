import React from 'reactn';
import { Grid, Typography, TextField } from '@material-ui/core';
import InsulinInput from '../insulinInput';
import { CAMPIST_DATA } from '../../../../Store/reducers/storeNames';
import {
  LESS_THAN_80,
  BETWEEN_81_120,
  BETWEEN_161_250,
  BIGGER_THAN_250,
  BREAKFAST,
  LUNCH,
  DINNER
} from '../../../../Store/reducers/campistData';

class Scales extends React.Component {
  setInsulinSchemaValue = (time, type) => e => {
    if (typeof type !== 'undefined') {
      this.global.campistDataSetInsulinSchemaScaleValue(
        time,
        type,
        e.target.value
      );
    } else {
      type = time;
      this.global.campistDataSetInsulinSchemaScaleValue(type, e.target.value);
    }
  };

  render() {
    const { insulinSchemaScale } = this.global[CAMPIST_DATA];

    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h6">Desayuno</Typography>
        </Grid>
        <InsulinInput
          label={LESS_THAN_80}
          onChange={this.setInsulinSchemaValue(BREAKFAST, LESS_THAN_80)}
          value={insulinSchemaScale[BREAKFAST][LESS_THAN_80]}
        />
        <InsulinInput
          label={BETWEEN_81_120}
          onChange={this.setInsulinSchemaValue(BREAKFAST, BETWEEN_81_120)}
          value={insulinSchemaScale[BREAKFAST][BETWEEN_81_120]}
        />
        <InsulinInput
          label={BETWEEN_161_250}
          onChange={this.setInsulinSchemaValue(BREAKFAST, BETWEEN_161_250)}
          value={insulinSchemaScale[BREAKFAST][BETWEEN_161_250]}
        />
        <InsulinInput
          label={BIGGER_THAN_250}
          onChange={this.setInsulinSchemaValue(BREAKFAST, BIGGER_THAN_250)}
          value={insulinSchemaScale[BREAKFAST][BIGGER_THAN_250]}
        />
        <Grid item xs={12}>
          <Typography variant="h6">Almuerzo</Typography>
        </Grid>
        <InsulinInput
          label={LESS_THAN_80}
          onChange={this.setInsulinSchemaValue(LUNCH, LESS_THAN_80)}
          value={insulinSchemaScale[LUNCH][LESS_THAN_80]}
        />
        <InsulinInput
          label={BETWEEN_81_120}
          onChange={this.setInsulinSchemaValue(LUNCH, BETWEEN_81_120)}
          value={insulinSchemaScale[LUNCH][BETWEEN_81_120]}
        />
        <InsulinInput
          label={BETWEEN_161_250}
          onChange={this.setInsulinSchemaValue(LUNCH, BETWEEN_161_250)}
          value={insulinSchemaScale[LUNCH][BETWEEN_161_250]}
        />
        <InsulinInput
          label={BIGGER_THAN_250}
          onChange={this.setInsulinSchemaValue(LUNCH, BIGGER_THAN_250)}
          value={insulinSchemaScale[LUNCH][BIGGER_THAN_250]}
        />
        <Grid item xs={12}>
          <Typography variant="h6">Cena</Typography>
        </Grid>
        <InsulinInput
          label={LESS_THAN_80}
          onChange={this.setInsulinSchemaValue(DINNER, LESS_THAN_80)}
          value={insulinSchemaScale[DINNER][LESS_THAN_80]}
        />
        <InsulinInput
          label={BETWEEN_81_120}
          onChange={this.setInsulinSchemaValue(DINNER, BETWEEN_81_120)}
          value={insulinSchemaScale[DINNER][BETWEEN_81_120]}
        />
        <InsulinInput
          label={BETWEEN_161_250}
          onChange={this.setInsulinSchemaValue(DINNER, BETWEEN_161_250)}
          value={insulinSchemaScale[DINNER][BETWEEN_161_250]}
        />
        <InsulinInput
          label={BIGGER_THAN_250}
          onChange={this.setInsulinSchemaValue(DINNER, BIGGER_THAN_250)}
          value={insulinSchemaScale[DINNER][BIGGER_THAN_250]}
        />
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Comentarios"
            margin="dense"
            multiline
            onChange={this.setInsulinSchemaValue('comment')}
            rows="3"
            value={insulinSchemaScale.comment}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Scales;
