import React, { Component } from 'react';
// Hojas de Estilo en React
import '../assets/formularios.css';
// Componentes externos
import Sinteticos from './eventos/sinteticos';
import Soportado from './eventos/soportados';


/* TIPOS DE EVENTOS EN REACT 
    Se definen como prop o atributo sobre el elemento
    Usa el sistema Camelcase

    - onClic={}

*/


class Fields extends Component{
    render(){

        const {
            nombre
        } = this.props;


        return(
            <div className="form-field">
                <h3>FORMULARIO EN ANGULAR</h3>
                <hr />            
                <label>{nombre}</label><br />
                <input type="text" name={nombre} />
            </div>
        );
    }
}



class Formularios extends Component{

    // Aqui defino un estate del formulario
    constructor(){

        super()

        this.state = {
            showForm: false
        };
        
        // This binding is necessary to make `this` work in the callback, Envoca la funcion para que afecete el state inicial
        this.showFor = this.showFor.bind(this);

        this.hideFor = this.hideFor.bind(this);

    }
    
    // El set state va siempre en una funcion de callback para que funcione, esta showFor() va siempre por fuera del render y en la "Vista se envoca como this.showFor"
    showFor(){
            
        this.setState(state => ({
            showForm: true
        }));
    }

    hideFor(){
            
        this.setState(state => ({
            showForm: false
        }));
    }    


    render(){
        
        return(
            <div className="app">

                <Soportado 
                    resume="Son eventos que estan por defecto en React JS"
                />

                <Sinteticos 
                    resume="
                        Los eventos sinteticos que devuelven una funcion son compatibles tanto para eventos del DOM y Nativo
                    "
                />
                <button type="button" onClick={this.showFor}>Mostrar Formulario</button>
                <button type="button" onClick={this.hideFor}>Ocultar Formulario</button>
               
                {this.state.showForm ?
                    <Fields 
                        nombre = "Nombre"
                    />
                    :
                    <div></div>
                }
            </div>
        );
    }
}

export default Formularios;