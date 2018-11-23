import React, { Component } from 'reactn';
import { Paper, AppBar, Tabs, Tab } from '@material-ui/core';

import styles from './style.module.scss';

class AddEdit extends Component {
  state = {};

  componentDidMount() {
    if (
      this.props &&
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      this.global.setHeaderTitle('Editar campista');
    } else {
      this.global.setHeaderTitle('Agregar campista');
    }
  }

  render() {
    return (
      <div>
        <Paper className={styles['container-paper']} square elevation={12}>
          <AppBar position="static" color="secondary">
            <Tabs
              value={0}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              <Tab label="Detalles Básicos" />
              <Tab label="Dosis basal" />
              <Tab label="Esquema de Insulina" />
              <Tab label="Porción de Alimentos" />
            </Tabs>
          </AppBar>
        </Paper>
      </div>
    );
  }
}

export default AddEdit;
