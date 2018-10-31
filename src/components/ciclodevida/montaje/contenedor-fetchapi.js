/* 
    Metodo FECH API:
    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

    Fetch api es un metodo que sirve para extraer data de un API REST

    Usaremos para conectar con el api esta pagina: https://www.coindesk.com/api/

*/

import React, { Component } from 'react';
// Aqui importamos el render de nuestro contenido
import { Vista } from './contenido-fetchapi';

class FetchApi extends Component{

    // Creamos un state para almacenar la respuesta del fetch
    constructor(props){
        super(props)
            
        this.state = {
            bpi: {}
        }

    }

    // Existe un metodo Global llamado fetch que apunta a un endpoint y trae los datos en json en forma de promesa, estos datos a su vez se almacenan en una variable data

    componentDidMount () {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/COP.json')
            // Promesa que trae la informacion
            .then(res => res.json())
            // En data se muestra
            .then(data => {
               // Ahora filtramos de lo que hay en bpi que es donde trae las monedas
               const { bpi } = data
               console.log( bpi );
               //Aqui le asigna el result al state
               this.setState({ bpi })
               
            })
    }

    render(){
        return(
           <Vista bpi={this.state.bpi}/>
        );
    }
}

export default FetchApi;