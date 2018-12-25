import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar, IconButton } from '@material-ui/core';
import { CheckCircle, Close } from '@material-ui/icons';

import styles from './style.module.scss';

const SuccessSnackbar = props => {
  return (
    <Snackbar
      ContentProps={{
        className: styles['snack-success']
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={props.isOpen}
      message={
        <span className={styles['snack-text']}>
          <CheckCircle className={styles.icon} />
          {props.message}
        </span>
      }
      autoHideDuration={6000}
      onClose={props.onClose}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={props.onClose}
        >
          <Close />
        </IconButton>
      ]}
    />
  );
};

SuccessSnackbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default SuccessSnackbar;
