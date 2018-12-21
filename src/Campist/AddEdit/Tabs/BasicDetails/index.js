import React from 'reactn';
import { Paper, TextField } from '@material-ui/core';

import styles from './style.module.scss';

class BasicDetails extends React.Component {
  state = {
    name: ''
  };

  saveValue = item => e => {
    this.setState({
      [item]: e.target.value,
      errorMsg: ''
    });
  };

  render() {
    return (
      <Paper className={styles['component']} elevation={0} square>
        <TextField
          className={styles['text-input']}
          fullWidth
          label="Nombre"
          margin="dense"
          onChange={this.saveValue('name')}
          required
          type="text"
          value={this.state.name}
        />
      </Paper>
    );
  }
}

export default BasicDetails;
