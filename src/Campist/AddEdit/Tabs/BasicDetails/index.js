import React from 'reactn';
import PropTypes from 'prop-types';
import { Paper, TextField, MenuItem, Button } from '@material-ui/core';

import styles from './style.module.scss';
import { COLORS } from '../../../../Constants/colors';

class BasicDetails extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  state = {
    name: '',
    lastname: '',
    yearsOld: '',
    weight: '',
    team: '',
    drugs: '',
    allergies: ''
  };

  saveValue = item => e => {
    this.setState({
      [item]: e.target.value,
      errorMsg: ''
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.global.addCampistData(this.state);
    this.props.handleSubmit();
  };

  render() {
    const textInputClass = styles['text-input'];
    const halfSizeClass = [styles['text-input'], styles['half-size']].join(' ');
    const thirdSizeClass = [styles['text-input'], styles['third-size']].join(
      ' '
    );

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
            value={this.state.name}
          />
          <TextField
            className={halfSizeClass}
            label="Apellidos"
            margin="dense"
            onChange={this.saveValue('lastname')}
            required
            type="text"
            value={this.state.lastname}
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
            value={this.state.yearsOld}
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
            value={this.state.weight}
          />
          <TextField
            className={thirdSizeClass}
            label="Seleccione el equipo"
            margin="dense"
            onChange={this.saveValue('team')}
            required
            select
            value={this.state.team}
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
            value={this.state.drugs}
          />

          <TextField
            className={textInputClass}
            fullWidth
            label="Alergias"
            margin="dense"
            multiline
            onChange={this.saveValue('allergies')}
            rows="3"
            value={this.state.allergies}
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
