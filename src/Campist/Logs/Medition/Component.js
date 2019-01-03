import React, { Component } from 'reactn';
import {
  Paper,
  CircularProgress,
  Button,
  Grid,
  TextField,
  MenuItem
} from '@material-ui/core';
import SuccessSnackbar from '../../../common/SuccessSnackbar';
import styles from './style.module.scss';
import { addLog } from '../../../Store/firebase/Log';
import { LOGMEDITION_DATA } from '../../../Store/reducers/storeNames';
import InsulinInput from '../../AddEdit/Tabs/insulinInput';
import { FOOD_TIME } from '../../../Store/reducers/logsData';

class LogMedition extends Component {
  state = {
    isDisabledSubmit: false,
    openSnack: false,
    loading: false
  };

  componentDidMount() {
    if (
      !(
        this.props.match &&
        this.props.match.params &&
        this.props.match.params.id
      )
    ) {
      this.props.history.push('/campists');
    }
    this.initLogMedition();
    this.global.setHeaderTitle('Agregar registro de Glucemia');
    this.global.setHeaderGoBack(true);
  }

  componentWillUnmount() {
    this.global.setHeaderGoBack(false);
  }

  initLogMedition = () => {
    const campistId = this.props.match.params.id;
    this.global.initLogMeditionData(campistId);
  };

  onCloseSnackbar = () => {
    this.setState({
      openSnack: false
    });
  };

  handleCancel = () => {
    this.props.history.push(`/campists/${this.props.match.params.id}`);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isDisabledSubmit: true });
    addLog(this.global[LOGMEDITION_DATA])
      .finally(() => {
        this.setState({
          isDisabledSubmit: false,
          openSnack: true
        });
        this.initLogMedition();
      })
      .catch(e => {
        console.error('error', e);
      });
  };

  handleChangeValue = attName => e => {
    this.global.logMeditionDataAddValue(attName, e.target.value);
  };

  render() {
    const logMeditionData = this.global[LOGMEDITION_DATA];

    return (
      <div>
        <Paper className={styles['container-app-bar']} elevation={12} square>
          <form onSubmit={this.handleSubmit}>
            <Grid spacing={8} container>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Hora de Comida"
                  margin="dense"
                  onChange={this.handleChangeValue('foodTime')}
                  required
                  select
                  value={logMeditionData.foodTime}
                >
                  {Object.keys(FOOD_TIME).map(foodTimeName => (
                    <MenuItem key={foodTimeName} value={foodTimeName}>
                      {FOOD_TIME[foodTimeName]}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <InsulinInput
                xs={12}
                label="Resultado mg/dL"
                onChange={this.handleChangeValue('result')}
                value={logMeditionData.result}
              />
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Fecha y Hora"
                  margin="dense"
                  onChange={this.handleChangeValue('datetime')}
                  required
                  type="datetime-local"
                  value={logMeditionData.datetime}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Descripción"
                  margin="dense"
                  multiline
                  onChange={this.handleChangeValue('description')}
                  rows="3"
                  value={logMeditionData.description}
                />
              </Grid>
            </Grid>
            <Grid spacing={8} container direction="row" justify="flex-end">
              <Grid item>
                <Button
                  onClick={this.handleCancel}
                  variant="contained"
                  color="secondary"
                  size="small"
                >
                  Cancelar
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  disabled={this.state.isDisabledSubmit}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Agregar
                </Button>
              </Grid>
            </Grid>
            {this.state.loading && (
              <div className={styles.loader}>
                <CircularProgress disableShrink />
              </div>
            )}
          </form>
        </Paper>
        <SuccessSnackbar
          onClose={this.onCloseSnackbar}
          isOpen={this.state.openSnack}
          message={'El registro se ha almacenado correctamente'}
        />
      </div>
    );
  }
}

export default LogMedition;
