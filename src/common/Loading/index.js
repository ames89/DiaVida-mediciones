import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <CircularProgress size={60} />
    </div>
  );
};

export default Loading;
