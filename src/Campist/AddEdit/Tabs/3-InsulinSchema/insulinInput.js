import React from 'react';
import { Grid } from '@material-ui/core';
import InsulinTextInput from '../../../../common/InsulinTextInput';

const InsulinInput = props => {
  return (
    <Grid item xs={props.xs}>
      <InsulinTextInput
        label={props.label}
        onChange={props.onChange}
        value={props.value}
      />
    </Grid>
  );
};

InsulinInput.defaultProps = {
  xs: 3
};

export default InsulinInput;
