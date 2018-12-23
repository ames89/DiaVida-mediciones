import React from 'reactn';
import {
  Button,
  Paper,
  TextField,
  IconButton,
  Grid,
  Fab
} from '@material-ui/core';

import { CAMPIST_DATA } from '../../../../Store/reducers/storeNames';
import Generic from '../generic';
import { Fragment } from 'react';
import { Add as AddIcon, Delete as DeleteIcon } from '@material-ui/icons';

import styles from './style.module.scss';
import InsulinTextInput from '../../../../common/InsulinTextInput';

class BasicDetails extends Generic {
  addBasal = () => {
    this.global.campistDataBasalDosageAdd();
  };

  removeBasal = idx => () => {
    this.global.campistDataBasalDosageRemove(idx);
  };

  editBasal = (idx, key) => e => {
    this.global.campistDataBasalDosageEdit(idx, key, e.target.value);
  };

  render() {
    const campistData = this.global[CAMPIST_DATA];

    return (
      <Paper className={styles['component']} elevation={0} square>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={8}>
            {campistData.basalDosage.map((dosage, idx) => {
              return (
                <Fragment key={JSON.stringify(idx)}>
                  <Grid item xs={6}>
                    <InsulinTextInput
                      label="Dosis de insulina"
                      onChange={this.editBasal(idx, 'dosage')}
                      value={dosage.dosage}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="hora"
                      margin="dense"
                      onChange={this.editBasal(idx, 'time')}
                      required
                      type="time"
                      value={dosage.time}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton onClick={this.removeBasal(idx)}>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Fragment>
              );
            })}
            <Grid item xs={12}>
              <Fab
                size="small"
                color="primary"
                aria-label="Add"
                onClick={this.addBasal}
              >
                <AddIcon />
              </Fab>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="flex-end" spacing={8}>
                <Grid item>
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    onClick={this.props.handleBack}
                  >
                    Anterior
                  </Button>
                </Grid>
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
