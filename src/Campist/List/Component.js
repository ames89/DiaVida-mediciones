import React, { Component } from 'reactn';
import { Paper, TextField, InputAdornment, Fab } from '@material-ui/core';
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

    this.hidrateCampists();
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

  hidrateCampists = () => {
    getAllCampists().then(docs => {
      const campists = [];
      docs.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        const index = campists.findIndex(camp => doc.id === camp.id);

        if (index < 0) {
          campists.push(data);
        } else {
          campists[index] = data;
        }
      });
      const sorted = campists
        .sort((a, b) =>
          a.names.toLowerCase().localeCompare(b.names.toLowerCase())
        )
        .sort((a, b) => a.team.localeCompare(b.team));

      this.setState({ campists: sorted });
    });
  };

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
        <Fab
          className={styles['fab-button']}
          color="primary"
          onClick={() => {
            this.props.history.push('/app/new-campist');
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default List;
