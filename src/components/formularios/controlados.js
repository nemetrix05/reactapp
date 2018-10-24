import React, { Component } from 'react';

// La mejor forma de administrar los datos de un formulario es guardando los valores en el state y cambiarlos en el componente por medio del onchange().

class Controlados extends Component{
 
    constructor(props){
        super(props)
        this.state = {
            equipo: 'Nacional'
        }
    }

    // Se reciben los datos desde el metodo onSubmit, pero se almacenan en los state
    Enviar = (e) =>{
        e.preventDefault()

        console.log(
            this.state.equipo
        )
    }
 
    // Dentro de cada elemento del form se debe llamar en onchange para modificar el state y asignarle el valor. Con una array function se le asigna al state el valor del input e.target.value
    render(){

        const {equipo} = this.state

        return(
            <div>
                <form onSubmit={this.Enviar}>
                    <p>
                        <label>Equipo</label>
                        <input
                            type="text"
                            placeholder="Escribir equipo"
                            name="equipo"
                            value={equipo}
                            onChange={e => this.setState({equipo: e.target.value}) }
                         />
                    </p>
                    <p>
                        <button>{this.props.text}</button>
                    </p>
                </form>
            </div>
        );
    }
}

export {
    Controlados
}