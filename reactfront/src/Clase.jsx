import React, { Component } from 'react'

class CompClase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mensaje:"Empezando con React con componente de clase"
        };
    }

    render() {
        return <div>{this.state.mensaje}</div>;
    }
}

export default CompClase;