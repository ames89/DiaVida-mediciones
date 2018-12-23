import React from 'reactn';
import PropTypes from 'prop-types';

class Generic extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleBack: PropTypes.func
  };

  saveValue = item => e => {
    this.global.campistDataSetValue(item, e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
  };
}

export default Generic;
