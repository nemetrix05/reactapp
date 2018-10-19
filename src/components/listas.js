import React, { Component } from 'react';

class List extends Component{
    render(){
        // Podemos guardar Listas en constantes
        const articulos = [1, 3, 9, 10];
        // En el return transformamos cada una en un loop con el objeto map
        return(
            // con el metodo .map convertimos en el retorno que le pasemos, importante que cada elemento de la array tenga un Unique Key, para eso le pasamos como segundo parametro el index de la casill
            <div>
                <h3 className="color2">Listas en React</h3>
                {articulos.map( (articulos, index) =>{
                    return <p key={index}>Cada elemento de la lista es {articulos}</p>
                })}

                <div>{this.props.closure}</div>
                
                <hr />
                
            </div>

           
        );
    }
}

export default List;