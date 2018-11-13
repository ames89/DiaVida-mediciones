import React, { Component } from 'react';

import fb from './Store/firebase';

import Loading from './common/Loading';
import Routes from './Routes';

import styles from './App.module.scss';

const loadUserData = LocalComponent => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = { loading: true };
    }

    componentDidMount() {
      fb.auth().onAuthStateChanged(user => {
        this.setState({ loading: false });
      });
    }

    render() {
      const { loading } = this.state;
      if (loading) {
        return <Loading />;
      }
      return <LocalComponent />;
    }
  };
};

const App = () => {
  return (
    <div className={styles.app}>
      <Routes />
    </div>
  );
};

export default loadUserData(App);
