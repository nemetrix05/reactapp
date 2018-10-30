// Siempre se lanza en los elementos children, y sirve para capturar errores no controlados. Es util para detectar y normalizar el componente en caso de error

import React, { Component } from 'react';

// Como didcatch no lanza errores en metodos, se usa un componente que contenga el error para que lanze la exepcion
class BotonError extends Component{

    state = {
        errorp: false
    }

    render(){
        if(this.state.errorp){
            // Asi lanza un error si el state esta true
           throw new Error ('Error en la app')
        }

        return(
            <div>
                <button onClick={() => this.setState({errorp: true}) }> Lanzar Error</button>
            </div>
        );
    }
}


class DidCatch extends Component{

    // Para capturar el error hacemos un state con los errores recibidos y renderizamos el contenido de acuerdo al serstate

    state = {
        Herror: false,
        Msn: ''
    }

    // En el componente padre se envoca el metodo componentDidCatch para capturar el error lanzado desde el componente hijo. Recibe como param: error errorInfo

    componentDidCatch(error, errorInfo){
        console.log('componentDidCatch');
        console.log(error, errorInfo);
        // Aqui actualiza el state de acuerdo a la exepcion
        this.setState({
            Herror: true,
            Msn: error.toString()
        })
    }

    render(){

        // Podemos hacer un boton para devolver el app a su estado inicial y con eso manejamos la exepcion


        if(this.state.Herror){
            return(
                <div>
                    Ocurrio un error en la aplicacion, detalles:<br />
                    <strong>{this.state.Msn}</strong>
                    <button
                        onClick={() => this.setState({
                            Herror: false
                        })}
                    >
                        Reestablecer el app
                    </button>
                
                </div>
            );
        }

        return(
            <div>
                <h3
                    style={{
                        'textAlign': 'center',
                        'color': 'blue'
                    }}
                >Unsando componentDidCatch</h3>
                <BotonError />
            </div>
        );
    }
}

export default DidCatch;