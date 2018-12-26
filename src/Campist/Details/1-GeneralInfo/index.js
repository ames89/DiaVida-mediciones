import React from 'reactn';
import {
  Paper,
  TableRow,
  TableCell,
  Typography,
  Table,
  TableBody,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TableHead
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Ratio from './InsulinSchema/ratio';
import moment from 'moment';
import styles from './style.module.scss';
import { CAMPIST_DATA } from '../../../Store/reducers/storeNames';
import {
  INSULIN_SCHEMA_RATIO,
  INSULIN_SCHEMA_SCALE
} from '../../../Store/reducers/campistData';
import Scale from './InsulinSchema/scale';
import FoodTable from './FoodTable';

class GeneralInfo extends React.Component {
  render() {
    const campistData = this.global[CAMPIST_DATA];

    return (
      <Paper className={styles['component']} elevation={0} square>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h5">2</Typography>
                <Typography variant="caption">años</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">2</Typography>
                <Typography variant="caption">kilos</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">amarillo</Typography>
                <Typography variant="caption">equipo</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <Typography>Esquema de insulina</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {campistData.insulinSchemaType === INSULIN_SCHEMA_RATIO && (
              <Ratio />
            )}
            {campistData.insulinSchemaType === INSULIN_SCHEMA_SCALE && (
              <Scale />
            )}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <Typography>Medicamentos adicionales</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{campistData.drugs}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <Typography>Alergias</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{campistData.allergies}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <Typography>Insulina Basal</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Dosis de insulina</TableCell>
                  <TableCell>Hora de aplicación</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {campistData.basalDosage.map(row => {
                  return (
                    <TableRow key={row.time}>
                      <TableCell>{row.dosage}</TableCell>
                      <TableCell>
                        {moment(row.time, 'LT').format('h:mm a')}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <Typography>Porciones de Alimentos</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FoodTable />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
    );
  }
}

export default GeneralInfo;
