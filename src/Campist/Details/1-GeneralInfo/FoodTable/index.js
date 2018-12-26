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
  CARBOHYDRATES,
  PROTEIN,
  FRUIT,
  DAIRY,
  MORNING_SNACK,
  LUNCH,
  AFTERNOON_SNACK,
  DINNER,
  BEFORE_SLEEP
} from '../../../../Store/reducers/campistData';
import { CAMPIST_DATA } from '../../../../Store/reducers/storeNames';

class FoodTable extends React.Component {
  render() {
    const { foodPortions } = this.global[CAMPIST_DATA];

    return (
      <Paper elevation={0}>
        <Table padding="checkbox">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell padding="checkbox">Carb</TableCell>
              <TableCell padding="checkbox">Prot</TableCell>
              <TableCell padding="checkbox">Frut</TableCell>
              <TableCell padding="checkbox">Lact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                Desayuno
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[BREAKFAST][CARBOHYDRATES]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[BREAKFAST][PROTEIN]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[BREAKFAST][FRUIT]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[BREAKFAST][DAIRY]}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                Merienda mañana
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[MORNING_SNACK][CARBOHYDRATES]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[MORNING_SNACK][PROTEIN]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[MORNING_SNACK][FRUIT]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[MORNING_SNACK][DAIRY]}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                Almuerzo
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[LUNCH][CARBOHYDRATES]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[LUNCH][PROTEIN]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[LUNCH][FRUIT]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[LUNCH][DAIRY]}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                Merienda tarde
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[AFTERNOON_SNACK][CARBOHYDRATES]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[AFTERNOON_SNACK][PROTEIN]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[AFTERNOON_SNACK][FRUIT]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[AFTERNOON_SNACK][DAIRY]}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                Cena
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[DINNER][CARBOHYDRATES]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[DINNER][PROTEIN]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[DINNER][FRUIT]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[DINNER][DAIRY]}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox" variant="head">
                Merienda noche
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[BEFORE_SLEEP][CARBOHYDRATES]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[BEFORE_SLEEP][PROTEIN]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[BEFORE_SLEEP][FRUIT]}
              </TableCell>
              <TableCell padding="checkbox">
                {foodPortions[BEFORE_SLEEP][DAIRY]}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default FoodTable;
