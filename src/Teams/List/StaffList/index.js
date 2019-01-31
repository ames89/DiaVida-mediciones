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
import { getAllStaff } from '../../../Store/firebase/Staff';
import { STAFF_RANKS } from '../../../Store/reducers/staffData';

class StaffList extends Component {
  state = {
    rows: []
  };

  componentDidMount() {
    getAllStaff().then(docs => {
      const staff = [];
      docs.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        const index = staff.findIndex(person => doc.id === person.id);

        if (index < 0) {
          staff.push(data);
        } else {
          staff[index] = data;
        }
      });
      const sorted = staff
        .sort((a, b) =>
          a.names.toLowerCase().localeCompare(b.names.toLowerCase())
        )
        .sort((a, b) => a.team.localeCompare(b.team));

      this.setState({ rows: sorted });
    });
  }

  onClickRow = id => () => {
    this.props.history.push(`/teams/staff/${id}`);
  };

  render() {
    const { rows } = this.state;

    return (
      <Table padding="checkbox">
        <TableHead>
          <TableRow>
            <TableCell className={styles['table-cell-color']} />
            <TableCell>Nombre</TableCell>
            <TableCell>Rango</TableCell>
            <TableCell>Teléfono</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell
                  className={
                    styles[
                      row.team
                        ? `table-cell-color-${row.team}`
                        : 'table-cell-color'
                    ]
                  }
                />
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
                  <Typography>
                    {row.rank ? STAFF_RANKS[row.rank] : 'N/A'}
                  </Typography>
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

export default withRouter(StaffList);
