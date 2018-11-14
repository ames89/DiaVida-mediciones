import React, { Component } from 'reactn';

import Header from '../common/Header';
import Routes from './Routes';

import styles from './style.module.scss';

export default class MainAppView extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header title={this.global.headerTitle} />
        <Routes />
      </div>
    );
  }
}
