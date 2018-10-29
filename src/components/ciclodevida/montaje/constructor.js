/* Ciclo de vida de los componentes
Se refiere al los direfentes estados por los cuales pasa una aplicacion

1. MONTAJE: Se ejecuta siempre al iniciar el componente con su estado inicial y las props envocadas
2. ACTUALIZACION: Se ejecuta cuando hay cambios en las props o states y se usa el metodo render() para ver los cambios en el DOM
3. DESMONTAJE: Eliminar todas las referencias al componente o metodos que envoquen el DOM desde la clase del componente

Link componente:
https://github.com/AprendiendoFrontend/Aprendiendo-React/blob/master/udemy-curso-ejemplos/src/sections/life-cycle/constructor.jss

*/

import React, { Component } from 'react'; 
import { ComponentWillMount } from './willmouth';
import { Render } from './render';
import { ComponentDidMount } from './didmount';
import { FetchApi } from './fetchapi';


class Constructor extends Component{

    constructor(props){
        super(props)
        this.state = {
            bienvenida: 'Welcome'
        }
    }

    render(){
        return(
            <div className="Appname">
                <h3>FETCHAPI para conectar con un API REST</h3>
                <FetchApi />
                <hr />     

                <h3>Fase Montaje: Metodo DIDMOUNT()</h3>
                <ComponentDidMount />
                <hr />                
                <h3>Fase Montaje: Metodo CONSTRUCTOR()</h3>
                <p>{this.state.bienvenida}</p>
                <hr />
                <h3>Fase Montaje: Metodo WILLMOUNT()</h3>
                <ComponentWillMount />
                <hr />     
                <h3>Fase Montaje: Metodo RENDER()</h3>
                <Render />
                <hr />                                                  
            </div>
        );
    }
}

export default Constructor;