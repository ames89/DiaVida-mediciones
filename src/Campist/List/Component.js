import React, { Component } from 'reactn';
import { Paper, TextField, InputAdornment, Button } from '@material-ui/core';
import { Search, Add as AddIcon } from '@material-ui/icons';

import { getAllCampists } from '../../Store/firebase/Campists';

import Table from './TableList';

import styles from './style.module.scss';

class List extends Component {
  state = {
    campists: [],
    campistsFiltered: [],
    filter: ''
  };

  componentDidMount() {
    this.global.setHeaderTitle('Lista de Campistas');

    getAllCampists(doc => {
      const data = doc.data();
      data.id = doc.id;
      const { campists } = this.state;
      const index = campists.findIndex(camp => doc.id === camp.id);

      if (index < 0) {
        this.setState({ campists: [...campists, data] });
      } else {
        campists[index] = data;
        this.setState({ campists: [...campists] });
      }
    });
  }

  static getDerivedStateFromProps(props, state) {
    const { campists } = state;
    const filter = state.filter
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    if (filter) {
      state.campistsFiltered = campists.filter(campist => {
        const allText = Object.values(campist)
          .join(',')
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
        let contains = true;

        filter.split(' ').forEach(word => {
          if (!allText.includes(word)) {
            contains = false;
          }
        });
        return contains;
      });
    } else {
      state.campistsFiltered = campists;
    }
    return state;
  }

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { campistsFiltered } = this.state;

    return (
      <div>
        <Paper className={styles['container-paper']} square elevation={12}>
          <TextField
            value={this.state.filter}
            onChange={this.handleChangeFilter}
            className={styles['search-input']}
            label="Encuentre un campista"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              )
            }}
          />
          <Table rows={campistsFiltered} />
        </Paper>
        <Button
          className={styles['fab-button']}
          color="primary"
          variant="fab"
          onClick={() => {
            this.props.history.push('/app/new-campist');
          }}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default List;
