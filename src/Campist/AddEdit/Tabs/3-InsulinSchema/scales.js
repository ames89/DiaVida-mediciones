import React from 'reactn';
import { Grid, Typography, TextField } from '@material-ui/core';
import InsulinInput from './insulinInput';

class Scales extends React.Component {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h6">Desayuno</Typography>
        </Grid>
        <InsulinInput label="<80" onChange={() => {}} value="" />
        <InsulinInput label="81-160" onChange={() => {}} value="" />
        <InsulinInput label="161-250" onChange={() => {}} value="" />
        <InsulinInput label="250<" onChange={() => {}} value="" />
        <Grid item xs={12}>
          <Typography variant="h6">Almuerzo</Typography>
        </Grid>
        <InsulinInput label="<80" onChange={() => {}} value="" />
        <InsulinInput label="81-160" onChange={() => {}} value="" />
        <InsulinInput label="161-250" onChange={() => {}} value="" />
        <InsulinInput label="250<" onChange={() => {}} value="" />
        <Grid item xs={12}>
          <Typography variant="h6">Cena</Typography>
        </Grid>
        <InsulinInput label="<80" onChange={() => {}} value="" />
        <InsulinInput label="81-160" onChange={() => {}} value="" />
        <InsulinInput label="161-250" onChange={() => {}} value="" />
        <InsulinInput label="250<" onChange={() => {}} value="" />
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

export default Scales;
