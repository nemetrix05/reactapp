// shouldComponentUpdate: Este metodo de fase de actualizacion no debe recibir set state, se ejecuta antes de actualizar el componente

import React, { Component } from 'react';


class ShouldC extends Component{

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate()');
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
    ShouldC
}