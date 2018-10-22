import React, { Component } from 'react';

class Soportado extends Component{

    // Cuando  queremos cambiar el state de un componente en una funcion, debemos llamar esa funcion dentro del constructor, para que ejecute el cambio de estado.

    // 1. Forma uno: Llamarlo directamente como una propiedad dentro del constructor
    // 2. Convertir la funcion a una de Array para que pueda cambiar el state

    constructor(){
        super()
        this.state = {
            mouseX: 0,
            mouseY: 0
        }

        //forma 1, Asignandolo al mismo contexto con el metodo this
        //this.HandleMouse = this.HandleMouse.bind(this);

    }

    // Segundo: Se crea la funcion ARRAY para llamar el evento y hacerlo funcionar con: = (e) =>

    HandleMouse = (e) =>{
        // En las cons, se llama la pocision del DOM que marca la pocision X, Y 
        const { clientX, clientY } = e
        // el this state, siempre debe ir this.state() sin = al comienzo
        this.setState({
            mouseX: clientX,
            mouseY: clientY
        });
    }


    render(){
        return(
            // Los eventos o funciones se ejecutan fuera del render
            <div className="Soportado">
                <h3 className="greenC">Eventos Soportado</h3>
                <p>{this.props.resume}</p>

                <div
                    onMouseMove={this.HandleMouse}
                    style={{border: '1px solid red', padding: 20}}>
                    {this.state.mouseX}, {this.state.mouseY}
                </div>

                <hr />
            </div>
        );
    }
}

export default Soportado;