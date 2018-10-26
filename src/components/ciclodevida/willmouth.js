import React, { Component } from 'react';

// El componente willmount, se ejecuta entre el constructor y el render, se le pueden pasar set state, en general cumple la misma funcion del constructor()

class ComponentWillMount extends Component{

    constructor(props){
        super(props)
        this.state = {
            bienvenida: 'Welcome'
        }
    }

    componentWillMount(){
        this.setState({bienvenida: 'otro'});
    }

    render(){
        return(
            <div>
                <p>{this.state.bienvenida}</p>
            </div>
        );
    }
}

export { 
    ComponentWillMount 
}