import React, { Component } from 'react';

// El metodo RENDER, es el encargado de mostrar la interfaz grafica de nuetra aplicacion, no se recomienda hacer operaciones con props o state dentro de ella, es obligatoria.

function Fragmento(){
    return(
        <div>Este es el Fragmento</div>
    );
}


class Render extends Component{

    constructor(props){
        super(props)
        this.state = {
            bienvenida: 'Welcome'
        }
    }

    // En el metodo render podemos incluir partes del DOOM devolverlo null, y con la ultima actualizacion ya no es requerido envolver toda la vista en un DIV, se puede devolver una array y en cada casilla ponemos un elemento, NOTA: a cada uno debemos agregarle el atributo key. Esto es llamado FRAGMENTOS
    render(){
        return(
            [
                <div key="base">
                    {this.state.bienvenida}
                    <Fragmento />
                </div>
            ]
        );
    }
}

export { 
    Render 
}