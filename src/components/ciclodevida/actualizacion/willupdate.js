// componentWillUpdate: Este metodo se ejecuta siempre y cuando el metodo should sea true, es usado como ultimo metodo antes del render y recibe 2 parametros (props y state)

import React, { Component } from 'react';


class WillUpdate extends Component{

    componentWillUpdate(){
        console.log('componentWillUpdate()');
    }

    render(){
        return (
            [
                <div key='contenedor'>
                    <p>Ejemplo de componente en el ejercicio anterior</p>
                </div>
            ]
        );
    }
}

export {
    WillUpdate
}