import React, { Component } from 'reactn';
import PropTypes from 'prop-types';
import {
  Paper,
  CircularProgress,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button
} from '@material-ui/core';

import SuccessSnackbar from '../../common/SuccessSnackbar';

import styles from './style.module.scss';
import DoctorInfo from './DoctorInfo';
import { DOCTOR_DATA, STAFF_DATA } from '../../Store/reducers/storeNames';
import { addDoctor } from '../../Store/firebase/Doctors';
import StaffInfo from './StaffInfo';
import { addStaff } from '../../Store/firebase/Staff';

const DOCTOR = 'doctor';
const STAFF = 'staff';

class AddEdit extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    creationType: '',
    openSnack: false,
    isDisabledSubmit: false,
    loading: false
  };

  componentDidMount() {
    this.global.setHeaderGoBack(true);
    this.global.setHeaderTitle('Agregar personal');
    // if (
    //   this.props &&
    //   this.props.match &&
    //   this.props.match.params &&
    //   this.props.match.params.id
    // ) {
    //   const id = this.props.match.params.id;
    //   this.setState({ loading: true });
    //   this.global.setHeaderTitle('Editar campista');
    //   getCampistById(id)
    //     .then(data => {
    //       this.document = data.doc;
    //       this.global.campistDataSet(data.docSnapshot.data());
    //       this.setState({ loading: false });
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       this.props.history.push('/campists');
    //     });
    // } else {
    // }
  }

  componentWillUnmount() {
    this.global.setHeaderGoBack(false);
  }

  onCloseSnackbar = () => {
    this.setState({ openSnack: false });
  };

  submitData = () => {
    const { creationType } = this.state;
    this.setState({
      isDisabledSubmit: true
    });
    let promise;
    if (creationType === DOCTOR) {
      promise = addDoctor(this.global[DOCTOR_DATA]);
    }
    if (creationType === STAFF) {
      promise = addStaff(this.global[STAFF_DATA]);
    }
    promise
      .finally(() => {
        this.global.initDoctorData();
        this.global.initStaffData();
        this.setState({
          isDisabledSubmit: false,
          openSnack: true,
          creationType: ''
        });
      })
      .catch(e => {
        console.error('error', e);
      });
  };

  handleChangeCreationType = e => {
    this.setState({ creationType: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.submitData();
  };

  render() {
    const { creationType, isDisabledSubmit } = this.state;
    return (
      <div>
        <Paper className={styles['container-app-bar']} elevation={12} square>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <FormControl required component="fieldset">
                  <FormLabel required component="legend">
                    Tipo de usuario a crear
                  </FormLabel>
                  <RadioGroup
                    row
                    onChange={this.handleChangeCreationType}
                    value={creationType}
                  >
                    <FormControlLabel
                      value={DOCTOR}
                      control={
                        <Radio
                          inputProps={{
                            name: 'CreationType',
                            required: !creationType
                          }}
                        />
                      }
                      label="Doctor(a)/Enfermero(a)"
                    />
                    <FormControlLabel
                      value={STAFF}
                      control={
                        <Radio
                          inputprops={{
                            name: 'CreationType',
                            required: !creationType
                          }}
                        />
                      }
                      label="Staff"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {creationType === DOCTOR && <DoctorInfo />}
              {creationType === STAFF && <StaffInfo />}
              <Grid item xs={12}>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Button
                      color="primary"
                      size="small"
                      variant="contained"
                      type="submit"
                      disabled={isDisabledSubmit}
                    >
                      Almacenar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
          {this.state.loading && (
            <div className={styles.loader}>
              <CircularProgress disableShrink />
            </div>
          )}
        </Paper>
        <SuccessSnackbar
          onClose={this.onCloseSnackbar}
          isOpen={this.state.openSnack}
          message="El personal se ha almacenado exitosamente"
        />
      </div>
    );
  }
}

export default AddEdit;
