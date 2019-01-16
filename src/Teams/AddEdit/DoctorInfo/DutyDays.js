import React, { Fragment } from 'reactn';
import {
  Grid,
  IconButton,
  FormControl,
  InputLabel,
  NativeSelect
} from '@material-ui/core';
import { DOCTOR_DAY, DOCTOR_SHIFT } from '../../../Store/reducers/doctorData';
import { Delete } from '@material-ui/icons';
import { DOCTOR_DATA } from '../../../Store/reducers/storeNames';

class DutyDays extends React.Component {
  changeDutyDay = (idx, key) => e => {
    this.global.doctorDataEditDutyDay(idx, key, e.target.value);
  };

  removeDutyDay = idx => e => {
    this.global.doctorDataRemoveDutyDay(idx);
  };

  render() {
    const { dutyDays } = this.global[DOCTOR_DATA];

    return dutyDays.map((day, idx) => {
      const { isEditable } = this.props;
      return (
        <Fragment key={idx}>
          <Grid item xs={5}>
            <FormControl fullWidth margin="dense" required>
              <InputLabel>Día</InputLabel>
              <NativeSelect
                disabled={!isEditable}
                required
                value={day.day}
                onChange={this.changeDutyDay(idx, 'day')}
              >
                <option value="" />
                {Object.keys(DOCTOR_DAY).map(drDay => (
                  <option key={drDay} value={drDay}>
                    {DOCTOR_DAY[drDay]}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <FormControl fullWidth margin="dense" required>
              <InputLabel>Guardia</InputLabel>
              <NativeSelect
                disabled={!isEditable}
                required
                value={day.shift}
                onChange={this.changeDutyDay(idx, 'shift')}
              >
                <option value="" />
                {Object.keys(DOCTOR_SHIFT).map(shift => (
                  <option key={shift} value={shift}>
                    {DOCTOR_SHIFT[shift]}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Grid>
          {isEditable && (
            <Grid item xs={2}>
              <IconButton
                disabled={!isEditable}
                onClick={this.removeDutyDay(idx)}
              >
                <Delete />
              </IconButton>
            </Grid>
          )}
        </Fragment>
      );
    });
  }
}

export default DutyDays;
