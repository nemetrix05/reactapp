import React, { Component } from 'react';


class Header extends Component{

    // Podemos pasar en un state del componente una prop. pero debemos pasarle como parametro en el constructor y en super (props) para que interprete que va una prop
    constructor (props) {
        super(props)
        this.state = { 
            textostate: this.props.final
        }
        
        setInterval(() =>{
            this.setState({ 
                textostate: this.state.textostate + 1
            })
        }, 1000)
    }

    render(){
        return (
        
            <div class="app">

                <p>Texto con state</p>

                <HijoValue change={this.state.textostate} algo={90} />

            </div>
        
        );
    }
}

// Definir Props por defecto y se las paso al state del componente, las props de un componente por defecto SIEMPRE DEBEN IR DEBAJO DE EL, en este caso REACT Trabaja Asincrono
Header.defaultProps = {
    final: 0
}

class HijoValue extends Component {

    // Para modificar un state, siempre va en el constructor del componente
    constructor(props){
        super(props)
        // Forma de declarar el state sin el constructor
        this.state = {
            parrafo: 8
        }        
        this.setState({
            parrafo: this.props.algo
        })  
    }


    render(){
        console.log('se pasa de padrea Hijo');
        return( 
                <div>
                    <h5>{this.props.change}</h5> 
                    <p>
                        {this.state.parrafo}
                    </p>
                </div>
            );
    }
}

class StatePartTwo extends Component{
    render(){
        return(
            <div>
                <Header final={500}/>
            </div>
        ); 
    }
}

export default StatePartTwo;