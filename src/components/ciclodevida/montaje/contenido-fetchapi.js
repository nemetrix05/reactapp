// Usando el patron CONTENEDOR Y CONTENIDO:

// El contenedor separa la parte logica de la aplicacion, mientras que el contenido SOLO MOSTRARA LA VISTA REPRESENTACIONAL

import React, { Component } from 'react';

class Vista extends Component{

    // Creamos un metodo que cargara el valor actual del state
    _showMonedas () {
        // rescato el state transformado con los datos de bpi del objeto}
        const { bpi } = this.props
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
    Vista
}