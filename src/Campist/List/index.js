import React, { Component } from 'reactn';

class List extends Component {
  componentDidMount() {
    this.global.setHeaderTitle('Lista de Campistas');
  }

  render() {
    return <h2>list stuff</h2>;
  }
}

export default List;
