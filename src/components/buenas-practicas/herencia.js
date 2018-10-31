// HERENCIA: Esta metodologia usa un componente padre y varios de sus componentes hijos se suscriben a ella extendiendola en una clase.

// No es una buena practica ya que hace el confundir el codigo y si tenemos mas componentes se puede salir de control

import React, { Component } from 'react';
import { Compocision } from './composicion';

// Creamos el componente padre y lo extendemos a component

class Padre extends Component{

    constructor(props){
        super(props)
        this.state = {
            padre: 'Padre'
        }
    }     

    render(){
        return(
            <button>Boton {this.state.padre}</button>
        );
    }

}

//BOTON HIJO: para suscribirse y camiar sus props o propiedades este elemento hijo debe extender de la clase del padre

class Hijo extends Padre{
    
    constructor(props){
        super(props)
        this.state = {
            padre: 'Hijo'
        }
    }

    render(){
        // podemos renderizar el contenido del elemto padre con {super.render()}
        return(
            <div>
                {super.render()}
                <br />
                <p>Renderizado cambiado desde el hijo</p>
                <div>{this.props.children}</div>
            </div>
        );
    }    

}



class Herencia extends Component{
    render(){
        return(
            <div className="App">
                <h2 style={{'textAlign':'center', 'color':'green'}}>Herencia en los componentes</h2>
                <hr />
                <Padre />
                <hr />
                <Hijo>
                    <strong>TEXTO DE CHILDREN</strong>
                </Hijo>
                <h2 style={{'textAlign':'center', 'color':'green'}}>Compocision en los componentes</h2>
                <Compocision />
                <hr />                
            </div>
        );
    }
}

export default Herencia;