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
import { LOGFOOD_DATA } from '../../../Store/reducers/storeNames';
import { FOOD_TYPES } from '../../../Store/reducers/logsData';
import InsulinInput from '../../AddEdit/Tabs/insulinInput';

class LogFood extends Component {
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
    const campistId = this.props.match.params.id;
    this.global.initLogFoodData(campistId);
    this.global.setHeaderTitle('Agregar registro de comida');
  }

  onCloseSnackbar = () => {
    this.setState({
      openSnack: false
    });
  };

  handleCancel = () => {
    this.setState({
      openSnack: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isDisabledSubmit: true });
    addLog(this.global[LOGFOOD_DATA])
      .finally(() => {
        this.setState({
          isDisabledSubmit: false,
          openSnack: true
        });
      })
      .catch(e => {
        console.error('error', e);
      });
  };

  handleChangeValue = attName => e => {
    this.global.logFoodDataAddValue(attName, e.target.value);
  };

  render() {
    const logFoodData = this.global[LOGFOOD_DATA];

    return (
      <div>
        <Paper className={styles['container-app-bar']} elevation={12} square>
          <form onSubmit={this.handleSubmit}>
            <Grid spacing={8} container>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tipo de Comida"
                  margin="dense"
                  onChange={this.handleChangeValue('foodType')}
                  required
                  select
                  value={logFoodData.foodType}
                >
                  {Object.keys(FOOD_TYPES).map(foodTypeName => (
                    <MenuItem key={foodTypeName} value={foodTypeName}>
                      {FOOD_TYPES[foodTypeName]}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <InsulinInput
                xs={12}
                label="Carbohidratos ingeridos"
                onChange={this.handleChangeValue('carbs')}
                value={logFoodData.carbs}
              />
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Fecha y Hora"
                  margin="dense"
                  onChange={this.handleChangeValue('datetime')}
                  required
                  type="datetime-local"
                  value={logFoodData.datetime}
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
                  value={logFoodData.description}
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

export default LogFood;
