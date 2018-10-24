import React, { Component } from 'react';
import './css/style.css';


class FrontendForm extends Component{

    constructor(){
        super()
        this.state = {
            name: null,
            email: null
        }
    }
    
    // Si queremos envocar propiedades que estan en otro contexto fuera del metodo, usamos funciones de array =()=> para enlazar los states y demas llamados que se hagan desde otros componentes.

    handleSend = (e) => {
        // este metodo, evita que el boton envie o haga el submit de la informacion
        e.preventDefault()
        // Atributo REF: Este atributo nos permite recuperar el valor del elemento, en lugar de usar document.getele... del DOM
        const name  = this.inputName.value;
        const email = document.getElementById('email').value;

        if(!name && !email){
            console.log('campos vacios');
        }else{
            this.setState({
                name: name,
                email: email
            })
        }

        console.log(name, email);
    }

    // Metodo que se ejecuta cuando cambia un elemento del form
    handleChange(e){
        console.log(e.target.value);
    }

    render(){

        // Recomendacion, usar el atributo For como atributo en la etiqueta label, esto hace un focus sobre el input asociado. pero debemos usar HTMLFOR en lugar de for

        // Atributo REF: Este atributo nos permite recuperar el valor del elemento, en lugar de usar document.getele... del DOM

        // se guarda en una funcion de array el valor del input y se devuelve en una propiedad {inputElement => this.nombrevaloruppercase = inputElement}

        /* EVENTOS USADOS EN FORMULARIOS
            onSubmit = Enviar los datos, se debe llamar un metodo que recoja los datos
            onChange = Detecta los cambios en un elemento del form, devuelve su resultado
            onClick  = Detecta el click sobre el elemento.  
        */

        return(
            <div>
                <form onSubmit={this.handleSend}>
                    <label htmlFor="nombre">Nombre</label><br />
                    <input 
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Escribe tu nombre"
                        ref={inputElement => this.inputName = inputElement}
                    />
                    <br />
                    <label htmlFor="email">Email</label><br />
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Escribe tu nombre"
                    /><br />   

                    <label>Pais</label><br />  
                    <select onChange={this.handleChange}>
                        <option value="">Seleccionar Pais</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Canada">Canada</option>
                    </select>
                    <br />

                    <br />

                    <button>Enviar</button>  

                    <div>
                        <p>Nombre   : {this.state.name}</p>
                        <p>Email    : {this.state.email}</p>    
                    </div>          
                </form>
            </div>
        );
    }
}

export {
    FrontendForm
}