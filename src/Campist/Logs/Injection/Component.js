import React, { Component } from 'reactn';
import {
  Paper,
  CircularProgress,
  Button,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import SuccessSnackbar from '../../../common/SuccessSnackbar';
import styles from './style.module.scss';
import { addLog } from '../../../Store/firebase/Log';
import { LOGINJECTION_DATA } from '../../../Store/reducers/storeNames';
import InsulinInput from '../../AddEdit/Tabs/insulinInput';

class LogInjection extends Component {
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
      this.props.history.push('/app');
    }
    this.initLogInjection();
    this.global.setHeaderTitle('Agregar registro de injección');
    this.global.setHeaderGoBack(true);
  }

  componentWillUnmount() {
    this.global.setHeaderGoBack(false);
  }

  initLogInjection = () => {
    const campistId = this.props.match.params.id;
    this.global.initLogInjectionData(campistId);
  };

  onCloseSnackbar = () => {
    this.setState({
      openSnack: false
    });
  };

  handleCancel = () => {
    this.props.history.push(`/app/campist/${this.props.match.params.id}`);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isDisabledSubmit: true });
    addLog(this.global[LOGINJECTION_DATA])
      .finally(() => {
        this.setState({
          isDisabledSubmit: false,
          openSnack: true
        });
        this.initLogInjection();
      })
      .catch(e => {
        console.error('error', e);
      });
  };

  handleChangeValue = attName => e => {
    this.global.logInjectionDataAddValue(attName, e.target.value);
  };

  render() {
    const logInjectionData = this.global[LOGINJECTION_DATA];

    return (
      <div>
        <Paper className={styles['container-app-bar']} elevation={12} square>
          <form onSubmit={this.handleSubmit}>
            <Grid spacing={8} container>
              <InsulinInput
                xs={12}
                label="Dosis de insulina"
                onChange={this.handleChangeValue('dosage')}
                value={logInjectionData.dosage}
              />
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Fecha y Hora"
                  margin="dense"
                  onChange={this.handleChangeValue('datetime')}
                  required
                  type="datetime-local"
                  value={logInjectionData.datetime}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <FormControl component="fieldset" required>
                <FormLabel required component="legend">
                  Tipo de insulina
                </FormLabel>
                <RadioGroup
                  value={logInjectionData.typeInjection}
                  onChange={this.handleChangeValue('typeInjection')}
                >
                  <FormControlLabel
                    value="FAST"
                    control={
                      <Radio
                        inputProps={{
                          name: 'insulinType',
                          required: true
                        }}
                      />
                    }
                    label="(Ultra/Semi) Rápida"
                  />
                  <FormControlLabel
                    value="BASAL"
                    control={
                      <Radio
                        inputProps={{
                          name: 'insulinType',
                          required: true
                        }}
                      />
                    }
                    label="Basal"
                  />
                </RadioGroup>
              </FormControl>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Descripción"
                  margin="dense"
                  multiline
                  onChange={this.handleChangeValue('description')}
                  rows="3"
                  value={logInjectionData.description}
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

export default LogInjection;
