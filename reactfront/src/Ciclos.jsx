import React, { Component } from 'react';

class CicloCompo extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Componente se montó');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Componente Actulizado');
  }

  componentWillUnmount() {
    console.log('Componse se desmontó');
  }

  render() {
    console.log('Render');
    return <div>Ciclos de vida de un componete</div>;
  }
  renderError() {
    console.log('RenderError');
    return <div>Ocurrió un error</div>;
  }
  render() {
    if (this.state.error) {
      return this.renderError();
    }
    return <div>Menostracion de ciclos de vida</div>;
  }
}
export default CicloCompo;
