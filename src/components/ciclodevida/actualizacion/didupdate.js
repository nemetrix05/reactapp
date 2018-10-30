// componentDidUpdate: Es el ultimo que se ejecuta en el ciclo de actualizacion, y es muy importante ya que se ejecuta luego del render y ya tiene las props y state actualizado luego de la actualizacion

import React, { Component } from 'react';


class DidC extends Component{

    componentDidUpdate(){
        console.log('componentDidUpdate()');
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
    DidC
}