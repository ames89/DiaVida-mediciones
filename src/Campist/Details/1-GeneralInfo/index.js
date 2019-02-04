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
  TableHead,
  Grid,
  IconButton
} from '@material-ui/core';
import { ExpandMore, Delete, Edit } from '@material-ui/icons';
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
  handleClickEdit = () => {
    const id = this.props.match.params.id;
    const { history } = this.props;
    history.push(`/campists/edit/${id}`);
  };

  handleClickDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    const resp = confirm('Está seguro de que desea borrar al campista?');
    if (!resp) {
      return;
    }
    const { history } = this.props;
    this.global.campistDataSetValue('deleted', true);
    this.setState({ loading: true });
    this.props.document.update(this.global[CAMPIST_DATA]).then(() => {
      this.setState({ loading: false });
      history.push('/campists');
    });
  };

  render() {
    const campistData = this.global[CAMPIST_DATA];

    return (
      <Paper className={styles['component']} elevation={0} square>
        <Grid container className={styles['big-container']}>
          <Grid item xs={3} className={styles['big-info']}>
            <Typography variant="h5">{campistData.age}</Typography>
            <Typography variant="caption">años</Typography>
          </Grid>
          <Grid item xs={3} className={styles['big-info']}>
            <Typography variant="h5">{campistData.weight}</Typography>
            <Typography variant="caption">kilos</Typography>
          </Grid>
          <Grid item xs={3} className={styles['big-info']}>
            <Typography variant="h5">{campistData.team}</Typography>
            <Typography variant="caption">equipo</Typography>
          </Grid>
          <Grid item xs={3} className={styles['big-info']}>
            <Typography variant="h5">{campistData.cabin || 'N/A'}</Typography>
            <Typography variant="caption">cama</Typography>
          </Grid>
        </Grid>
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
        <Grid
          className={styles['buttons-options']}
          container
          justify="flex-start"
          spacing={8}
        >
          <Grid item>
            <IconButton
              onClick={this.handleClickDelete}
              className={styles['button-delete']}
            >
              <Delete />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={this.handleClickEdit} color="secondary">
              <Edit />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default GeneralInfo;
