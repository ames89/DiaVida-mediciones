import React, { Component } from 'reactn';
import {
  Button,
  CircularProgress,
  Collapse,
  Paper,
  TextField
} from '@material-ui/core';

import fb from '../utils/firebase';

import styles from './style.module.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      pass: '',
      isFormExpanded: false,
      isLoading: false,
      errorMsg: ''
    };
  }

  toggleFormExpand = () => {
    this.setState({ isFormExpanded: !this.state.isFormExpanded });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { email, pass } = this.state;
    const isValid = e.target.reportValidity();

    if (!isValid) {
      return;
    }
    this.setState({ isLoading: true });

    fb.auth()
      .signInWithEmailAndPassword(email, pass)
      .finally(() => this.setState({ isLoading: false }))
      .then(data => {
        console.log('auth', data);
      })
      .catch(err => {
        const { code } = err;
        let errorMsg;

        console.error(err);

        switch (code) {
          case 'auth/invalid-email':
            errorMsg = 'Correo electrónico inválido';
            break;
          case 'auth/user-disabled':
            errorMsg = 'Usuario desactivado';
            break;
          case 'auth/user-not-found':
            errorMsg = 'Usuario no encontrado';
            break;
          case 'auth/wrong-password':
            errorMsg = 'Contraseña errónea';
            break;
          default:
            errorMsg = '';
        }
        this.setState({ errorMsg });
      });
  };

  saveValue = item => e => {
    this.setState({
      [item]: e.target.value,
      errorMsg: ''
    });
  };

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.logo} />
        <Paper className={styles['form-content']} elevation={24} square>
          <span
            className={styles['login-top-text']}
            onClick={this.toggleFormExpand}
          >
            Iniciar Sesión
          </span>
          <Collapse in={this.state.isFormExpanded}>
            <form
              className={styles.form}
              noValidate
              onSubmit={this.handleSubmitForm}
            >
              <TextField
                autoComplete="username"
                className={styles['text-input']}
                label="Correo electrónico"
                type="email"
                required
                value={this.state.email}
                onChange={this.saveValue('email')}
              />
              <TextField
                autoComplete="current-password"
                className={styles['text-input']}
                label="Contraseña"
                type="password"
                required
                value={this.state.pass}
                onChange={this.saveValue('pass')}
              />
              <div className={styles.footer}>
                <div className={styles['error-message']}>
                  {this.state.errorMsg}
                </div>
                <div className={styles['button-submit']}>
                  <Button
                    type="submit"
                    variant="outlined"
                    disabled={this.state.isLoading}
                  >
                    {this.state.isLoading ? 'Comprobando' : 'Entrar'}
                  </Button>
                  {!!this.state.isLoading && (
                    <CircularProgress
                      size={24}
                      className={styles['button-submit-loading']}
                    />
                  )}
                </div>
              </div>
            </form>
          </Collapse>
        </Paper>
      </div>
    );
  }
}

export default Login;
