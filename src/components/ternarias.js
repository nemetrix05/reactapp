import React, { Component } from 'react';

// Creo los componentes a cambiar

class Tern1 extends Component{
    render(){
        return <p>Dinamico <strong>one</strong></p>
    }
}

class Tern2 extends Component{
    render(){
        return <p>Dinamico <strong>Two</strong></p>
    }
}



class Ternarias extends Component{

    // El constructor siempre va fuera del render()
    constructor(){
        super()
        this.state = {
            ifUserLog: true
        }
    }

    // Las ternarias funcionan : condicion ? si se cumple : si no se cumple
    render(){
        return (
            <div>
                <p>Componente ternarias</p>
                {this.state.ifUserLog ? <Tern1 /> : <Tern2 />}
            </div>
        );
    }
}

export default Ternarias;

