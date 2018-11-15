import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

import styles from './style.module.scss';

class DataTable extends Component {
  static defaultProps = {
    rows: []
  };

  render() {
    const { rows } = this.props;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles['table-cell-color']} />
            <TableCell>Nombre</TableCell>
            <TableCell>Edad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell className={styles[`table-cell-color-${row.team}`]} />
                <TableCell>
                  {row.names} {row.lastNames}
                </TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default DataTable;
