// COMPOCISION:  En esta forma no se necesita declarar constructor ya que podemos pasar sus props a otro componente sin necesidad de herencia, ademas los componentes que eran antes hijos van a cambiar extension

import React, { Component } from 'react';


class Padre extends Component{
 
    render(){
        return(
            <button>Boton {this.props.padre}</button>
        );
    }

}

Padre.defaultProps = {
    padre: 'Texto por default'
}


class Hijo extends Component{    
    
    render(){
        return(
            <div>
                <Padre padre={this.props.padre} />
                <br />
                <p>Renderizado cambiado desde el hijo</p>
            </div>
        );
    }    

}

class Compocision extends Component{

    componentDidMount(){
        console.log('componentDidMount()');
    }

    render(){
        return(
            <div className="App">
                <hr />
                <Hijo
                    padre = 'Cambio de prop df'
                />
            </div>
        );
    }
}

export {
    Compocision
} 