import React, { Component } from 'react';


class Header extends Component{
    
    // El state declara el valor de una propiedad en un objeto, es decir que no va como atributo en el componente
    constructor () {
        // Definimos un state dentro de un metodo constructor
        super()
        this.state = { 
            textostate: 1
        }
        // Para cambiar el estado de un state usamos un metodo llamado setState() al cual le pasamos el state que queremos y le aplicamos el cambio, de forma que se ejecuta asincrono
        
        setInterval(() =>{
            this.setState({ 
                textostate: this.state.textostate + 1
            })
        }, 1000)
    }

    render(){

        // Se puede definir directamente el valor de una prop dentro del componente usando una constante
        /*const subtitulo = 'Encabezado';

        const {
            title
        } = this.props */

        return (
        
            <div class="app">

                <p>Texto con state</p>

                <HijoValue change={this.state.textostate} />

            </div>
        
        );
    }
}


// Los estados se pueden propagar a los demas componentes, haciendo una instancia del state por medio de una prop

class HijoValue extends Component {
    render(){
        console.log('se pasa de padrea Hijo');
        return <h5>{this.props.change}</h5>
    }
}



class State extends Component{
    render(){
        return(
            <div>
                <Header />
            </div>
        ); 
    }
}

export default State;