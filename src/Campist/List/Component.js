import React, { Component } from 'reactn';
import PropTypes from 'prop-types';
import {
  Paper,
  TextField,
  InputAdornment,
  Fab,
  Grid,
  MenuItem
} from '@material-ui/core';
import { Search, Add as AddIcon } from '@material-ui/icons';

import { getAllCampists } from '../../Store/firebase/Campists';

import Table from './TableList';

import styles from './style.module.scss';
import { COLORS } from '../../Constants/colors';

class List extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
    campists: [],
    campistsFiltered: [],
    filter: '',
    team: ''
  };

  componentDidMount() {
    this.global.setHeaderTitle('Lista de Campistas');

    this.hidrateCampists();
  }

  static getDerivedStateFromProps(props, state) {
    const { campists, team } = state;
    let campistsLoc = [...campists];

    if (team) {
      campistsLoc = campistsLoc.filter(campist => campist.team === team);
    }

    const filter = state.filter
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    if (filter) {
      state.campistsFiltered = campistsLoc.filter(campist => {
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
      state.campistsFiltered = campistsLoc;
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

  handleChangeFilter = name => e => {
    this.setState({ [name]: e.target.value });
  };

  render() {
    const { campistsFiltered } = this.state;
    const { history } = this.props;

    return (
      <div>
        <Paper className={styles['container-paper']} square elevation={12}>
          <Grid container spacing={8} className={styles.filters}>
            <Grid item xs={6}>
              <TextField
                value={this.state.filter}
                onChange={this.handleChangeFilter('filter')}
                fullWidth
                margin="dense"
                label="Nombre"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Equipo"
                margin="dense"
                onChange={this.handleChangeFilter('team')}
                select
                value={this.state.team}
              >
                <MenuItem value="" />
                {Object.keys(COLORS).map(color => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Table rows={campistsFiltered} />
        </Paper>
        <Fab
          className={styles['fab-button']}
          color="primary"
          onClick={() => {
            history.push('/app/campist/new');
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default List;
