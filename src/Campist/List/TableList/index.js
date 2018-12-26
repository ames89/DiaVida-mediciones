import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import { withRouter } from 'react-router';

import styles from './style.module.scss';

class TableList extends Component {
  static propTypes = {
    rows: PropTypes.array.isRequired
  };
  static defaultProps = {
    rows: []
  };

  onClickRow = id => () => {
    this.props.history.push(`/app/campist/${id}`);
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
              <TableRow
                className={styles['row-click']}
                key={row.id}
                onClick={this.onClickRow(row.id)}
              >
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

export default withRouter(TableList);
