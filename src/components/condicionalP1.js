import React, { Component } from 'react';
// Aqui puedo importar los componentes
// Tambien puedo importar las hojas de estilo
import './componentes.css';
import Ternarias from './ternarias';
import List from './listas';
import ObjectList from './objetos';

// Creamos los componentes que vamos a condicionar

class Componente1 extends Component{
    render(){
        return(
            <div>
                Texto Componente 1 {this.props.compl}
            </div>
        );
    }
}

class Componente2 extends Component{
    render(){
        return(
            <div>
                Texto Componente 2
            </div>
        );
    }
}

// 1. Para hacer la condicion debemos crear un state boleano
// 2. En el render usar el metodo: useConditionalRendering(se le pasa el estate)
// 3. Se hace la funcion que mostrara dinamicamente el componente en base al state. Se le pasa como parametro el valor del state

function useConditionalRendering(mostrarB){
    if(mostrarB){
        return <Componente2 />
    }else{
        return <Componente1 compl="NACIONAL"/>
    }
}

class ConditionsOne extends Component{
    
    // Dibujamos el constructor
    constructor(){
        super()
        this.state = { mostrarB: false }
    }

    render(){

        const algo = 300;

        return(
            <div className="app">
                <ObjectList />
                <List 
                    closure="algo"
                />
                <h3>USANDO TERNARIAS</h3>
                <Ternarias />
                <hr />
                <h2>Titulo de componente Padre</h2>
                {useConditionalRendering(this.state.mostrarB)}
                <p>{algo}</p>
                <hr />                
            </div>
        ); 
    }
}


export default ConditionsOne;