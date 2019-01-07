import React from 'reactn';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@material-ui/core';
import {
  BREAKFAST,
  LUNCH,
  DINNER,
  CORRECTION_FACTOR
} from '../../../../Store/reducers/campistData';
import { CAMPIST_DATA } from '../../../../Store/reducers/storeNames';

class Ratio extends React.Component {
  render() {
    const { insulinSchemaRatio } = this.global[CAMPIST_DATA];

    return (
      <Paper elevation={0}>
        <Table padding="checkbox">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell padding="checkbox">Desayuno</TableCell>
              <TableCell padding="checkbox">Almuerzo</TableCell>
              <TableCell padding="checkbox">Cena</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                Ratio
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaRatio[BREAKFAST]}
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaRatio[LUNCH]}
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaRatio[DINNER]}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table padding="checkbox">
          <TableBody>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                Factor de Corrección
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaRatio[CORRECTION_FACTOR]}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table padding="checkbox">
          <TableBody>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                Comentarios
              </TableCell>
              <TableCell padding="checkbox" align="left">
                {insulinSchemaRatio.comment}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Ratio;
