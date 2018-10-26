// El metodo del ciclo de vida componentDidMount se muestra cuando ya se ejecuta el render en el DOOM, alli podemos ejecutar o sucribirnos a eventos del dom, incluso cambiar el state

import React, { Component } from 'react';

class ComponentDidMount extends Component{

    // En el orden de ejecucion siempre el metodo render() va de ultima
    // Inicializa el componente
    constructor(props){
        super(props)
        console.log('Constructor ()');
        this.state = {
            texto: 'texto',
            scroll: 0
        }
    }

    // Inicia el componente, opcional, se pueden cambiar los states
    componentWillMount(){
        console.log('ComponentWillMount()');
    }

    // Metodo final que se ejecuta luego del Render, cuando este listo el DOM
    componentDidMount(){
        console.log('componentDidMount()');
        this.setState({texto: 'cambio desde el did mount'});
        // desde este metodo podemos suscribirnos a los eventos del DOM
        document.addEventListener('scroll', () => {
            this.setState({ scroll: window.scrollY })
        })
    }

    // Este metodo renderiza la pagina con todos sus componentes
    render(){
        console.log('Render ()');

        const {
            texto,
            scroll
        } = this.state

        return(
            <div>
                <p>{texto}</p>
                <p>{scroll}</p>
            </div>
        );
    }
}

export {
    ComponentDidMount
}