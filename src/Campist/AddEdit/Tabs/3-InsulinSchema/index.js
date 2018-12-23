import React from 'reactn';
import {
  Paper,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';

import { CAMPIST_DATA } from '../../../../Store/reducers/storeNames';
import {
  INSULIN_SCHEMA_SCALE,
  INSULIN_SCHEMA_RATIO
} from '../../../../Store/reducers/campistData';
import Generic from '../generic';
import Scales from './scales';
import Ratios from './ratio';

import styles from './style.module.scss';

class InsulinSchema extends Generic {
  handleChangeInsulinType = e => {
    this.global.campistDataChangeInsulinSchemaType(e.target.value);
  };

  render() {
    const { insulinSchemaType } = this.global[CAMPIST_DATA];

    return (
      <Paper className={styles['component']} elevation={0} square>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Esquema de Insulina</FormLabel>
                <RadioGroup
                  row
                  onChange={this.handleChangeInsulinType}
                  value={insulinSchemaType}
                >
                  <FormControlLabel
                    value={INSULIN_SCHEMA_SCALE}
                    control={<Radio />}
                    label="Escala"
                  />
                  <FormControlLabel
                    value={INSULIN_SCHEMA_RATIO}
                    control={<Radio />}
                    label="Radio"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          {insulinSchemaType === INSULIN_SCHEMA_SCALE && <Scales />}
          {insulinSchemaType === INSULIN_SCHEMA_RATIO && <Ratios />}
        </form>
      </Paper>
    );
  }
}

export default InsulinSchema;
