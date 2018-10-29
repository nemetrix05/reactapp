/* 
    Metodo FECH API:
    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

    Fetch api es un metodo que sirve para extraer data de un API REST

    Usaremos para conectar con el api esta pagina: https://www.coindesk.com/api/

*/

import React, { Component } from 'react';

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

    // Creamos un metodo que cargara el valor actual del state
    _showMonedas () {
        // rescato el state transformado con los datos de bpi del objeto}
        const { bpi } = this.state
        const transform = Object.keys(bpi) // aqui sacan todas las monedas disponibles dentro de bpi {} 
        
        return transform.map(moneda =>(
            <p key={moneda}>Bitcoin en: {moneda} <strong>Equivale a: {bpi[moneda].rate}</strong></p>
        ))
    }   


    render(){
        return(
            <div>
                {this._showMonedas()}
            </div>
        );
    }
}

export {
    FetchApi
}