import React, { Component } from 'react';
// Si se importan archivos json, deben tener la extension
import cars from './data/cars.json';


    // Para hacer el codigo mas limpio se puede crear un componente que solo procese todos los objetos del archivo

class Carros extends Component{
    render(){
        // En la constante guardamos el valor de car en una prop para que no quede undefine

        // KEY solo se usa en React, si queremos usar la key del objeto, guardarla en otro atributo.
        const { car, id } = this.props

        return (
            <li>
                <p><strong>ID:</strong>{id}</p>
                <p><strong>Nombre:</strong>{car.name}</p>
                <p><strong>Compañia:</strong> {car.company}</p>
            </li>
        );
    }
}




class ObjectList extends Component{

    // Se instancia el nombre del archivo del json y se aplica el map(). Cada item de map se le agrega el campo en el objeto. No hay que olvidar la key


    render(){
        return(
            <div>
                <h3>Listas con Objetos</h3>
                <ul>
                    {cars.map( car => {
                        return <Carros car={car} key={car.id} id={car.id}/>
                    })}
                </ul>

                <hr />
            </div>
        );
    }
}

// Export default, solo aplica cuando es el componente raiz del app, siempre se exportan los demas en un objeto
export default ObjectList;