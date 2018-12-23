import React from 'reactn';
import PropTypes from 'prop-types';

class Generic extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleBack: PropTypes.func
  };

  componentDidMount() {
    this.global.initCampistData();
  }

  saveValue = item => e => {
    this.global.setCampistData(item, e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
  };
}

export default Generic;
