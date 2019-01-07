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
  LESS_THAN_80,
  BETWEEN_81_160,
  BETWEEN_161_250
} from '../../../../Store/reducers/campistData';
import { CAMPIST_DATA } from '../../../../Store/reducers/storeNames';

class Scale extends React.Component {
  render() {
    const { insulinSchemaScale } = this.global[CAMPIST_DATA];

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
                &lt;80
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale[BREAKFAST][LESS_THAN_80]}
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale[LUNCH][LESS_THAN_80]}
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale[DINNER][LESS_THAN_80]}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                81-160
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale[BREAKFAST][BETWEEN_81_160]}
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale[LUNCH][BETWEEN_81_160]}
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale[DINNER][BETWEEN_81_160]}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                161-250
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale[BREAKFAST][BETWEEN_161_250]}
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale[LUNCH][BETWEEN_161_250]}
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale[DINNER][BETWEEN_161_250]}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                &gt;250
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale[BREAKFAST][BETWEEN_161_250]}
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale[LUNCH][BETWEEN_161_250]}
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale[DINNER][BETWEEN_161_250]}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table padding="checkbox">
          <TableBody>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                Comentario
              </TableCell>
              <TableCell padding="checkbox">
                {insulinSchemaScale.comment}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Scale;
