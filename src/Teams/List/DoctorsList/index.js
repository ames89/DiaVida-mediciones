import React, { Component } from 'react';
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import { withRouter } from 'react-router';

import styles from './style.module.scss';
import { getAllDoctors } from '../../../Store/firebase/Doctors';

class DoctorsList extends Component {
  state = {
    rows: []
  };

  componentDidMount() {
    getAllDoctors().then(docs => {
      const doctors = [];
      docs.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        const index = doctors.findIndex(person => doc.id === person.id);

        if (index < 0) {
          doctors.push(data);
        } else {
          doctors[index] = data;
        }
      });
      const sorted = doctors
        .sort((a, b) =>
          a.names.toLowerCase().localeCompare(b.names.toLowerCase())
        )
        .sort((a, b) => a.speciality.localeCompare(b.speciality));

      this.setState({ rows: sorted });
    });
  }

  onClickRow = id => () => {
    this.props.history.push(`/teams/doctor/${id}`);
  };

  render() {
    const { rows } = this.state;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Especialidad</TableCell>
            <TableCell>Teléfono</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell
                  className={styles['row-click']}
                  onClick={this.onClickRow(row.id)}
                >
                  <Typography>
                    {row.names} {row.lastNames}
                  </Typography>
                </TableCell>
                <TableCell
                  className={styles['row-click']}
                  onClick={this.onClickRow(row.id)}
                >
                  <Typography>{row.speciality}</Typography>
                </TableCell>
                <TableCell>
                  <Button size="small" variant="text" href={`tel:${row.phone}`}>
                    <Typography>{row.phone}</Typography>
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default withRouter(DoctorsList);
