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
  FormControlLabel
} from '@material-ui/core';

import SuccessSnackbar from '../../common/SuccessSnackbar';

import styles from './style.module.scss';
import DoctorInfo from './DoctorInfo';

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
    // this.global.initCampistData();
    this.global.setHeaderGoBack(true);
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
    this.global.setHeaderTitle('Agregar personal');
    // }
  }

  componentWillUnmount() {
    this.global.setHeaderGoBack(false);
  }

  onCloseSnackbar = () => {
    this.setState({ openSnack: false });
  };

  submitData = () => {
    // this.setState({ isDisabledSubmit: true });
    // let promise;
    // if (this.document) {
    //   promise = this.document.update(this.global[CAMPIST_DATA]);
    // } else {
    //   promise = addCampist(this.global[CAMPIST_DATA]).then(() => {
    //     this.global.initCampistData();
    //     this.setState({
    //       tabPosition: 0
    //     });
    //   });
    // }
    // promise
    //   .finally(() => {
    //     this.setState({ isDisabledSubmit: false, openSnack: true });
    //   })
    //   .catch(e => {
    //     console.error('error', e);
    //   });
  };

  handleChangeCreationType = e => {
    this.setState({ creationType: e.target.value });
  };

  render() {
    const { creationType } = this.state;
    return (
      <div>
        <Paper className={styles['container-app-bar']} elevation={12} square>
          <form>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Tipo de usuario a crear
                  </FormLabel>
                  <RadioGroup
                    row
                    onChange={this.handleChangeCreationType}
                    value={creationType}
                  >
                    <FormControlLabel
                      value={DOCTOR}
                      control={<Radio />}
                      label="Doctor(a)/Enfermero(a)"
                      inputprops={{
                        name: 'CreationType',
                        required: true
                      }}
                    />
                    <FormControlLabel
                      value={STAFF}
                      control={<Radio />}
                      label="Staff"
                      inputprops={{
                        name: 'CreationType',
                        required: true
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {creationType === DOCTOR && <DoctorInfo />}
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
          message={
            this.props.match.params.id
              ? 'El campista se ha actualizado correctamente'
              : 'El campista se ha almacenado correctamente'
          }
        />
      </div>
    );
  }
}

export default AddEdit;
