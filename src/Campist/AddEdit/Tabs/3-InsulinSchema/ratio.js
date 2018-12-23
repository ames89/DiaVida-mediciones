import React from 'reactn';
import { Grid, Typography, TextField } from '@material-ui/core';
import InsulinInput from './insulinInput';

class Ratios extends React.Component {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h6">Ratios de Insulina</Typography>
        </Grid>
        <InsulinInput xs={4} label="Desayuno" onChange={() => {}} value="" />
        <InsulinInput xs={4} label="Almuerzo" onChange={() => {}} value="" />
        <InsulinInput xs={4} label="Cena" onChange={() => {}} value="" />
        <InsulinInput
          xs={12}
          label="Factor de Correccion"
          onChange={() => {}}
          value=""
        />
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Comentarios"
            margin="dense"
            multiline
            onChange={() => {}}
            rows="3"
            value=""
          />
        </Grid>
      </Grid>
    );
  }
}

export default Ratios;
