// El metodo componentWillUnmount: Se encarga de desinscribirnos de un componente y desmontar toda dependencia de el

import React, { Component } from 'react';

// Se crea un nuevo componente
class Adesmontar extends Component{

    state = {
        windowWith: 0
    }

    // Creamos el metodo que cambia el width
    changeWith = () => {
        this.setState({
            windowWith: document.body.clientWidth
        })
    }

    componentDidMount(){
        this.changeWith()
        // En este fase de ciclo de montaje, podemos uscribirnos a un evento del DOM
        window.addEventListener(
            'resize',
            this.changeWith
        )
    }

    // Aqui se usa el metodo componentWillUnmount(), para eliminar las suscripciones a cualquier evento del componente

    componentWillUnmount(){
        console.log('componentWillUnmount()');
        // Este metodo aparece al eliminar el componente y aqui se deben eliminar todas las suscripciones del evento eliminado
        window.removeEventListener(
            'resize',
            this.changeWith
        )
    }

    render(){
        //constante que guarda el state
        const { windowWith } = this.state

        return [
            <div key='par1'>
                <p>Componente a desmontar</p>
            </div>,
            <strong key='par2'>{windowWith}</strong>
        ]
    }
}


class WillUnmount extends Component{

    // En el render padre se destruye el componente usando un state

    state = {
        MostrarC: true
    }

    DesmontarCo = () =>{
        this.setState({
            MostrarC: false
        })
    }

    render(){
        // Condicionamos el estado del componente
        if(this.state.MostrarC){
            return(

                <div>
                    <h4>Titulo de componente padre</h4>
                    <Adesmontar /><br />
                    <button onClick={this.DesmontarCo}>Desmontar AQUI</button>
                </div>
            );
        }

        return 'Componente desmontado !!!!';
    }
}

export {
    WillUnmount
}