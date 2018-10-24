import React, { Component } from 'react';
import { FrontendForm } from './front';
import { Controlados } from './controlados';


class Formulario extends Component{
    render(){
        return(
            <div id="appform">
                <h2>Ejercicio Componentes Controlados</h2>
                <Controlados 
                    text="Enviar Formulario"
                />
                <hr />
                <FrontendForm />
            </div>
        );
    }
}

export {
    Formulario
}