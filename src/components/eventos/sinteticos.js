import React, { Component } from 'react';

class Sinteticos extends Component{

    constructor(){
        super()
        this.state = {
            activateSeccion: true
        }
    }

    onSintec(e){
        console.log(e);
    }


    render(){
        return(
            // Los eventos o funciones se ejecutan fuera del render
            <div className="Sintetico">
                <h3 className="greenC">Eventos Sinteticos</h3>
                <p>{this.props.resume}</p>
                <button type="button" onClick={this.onSintec}>Ver eventos sinteticos</button>
                <hr />
            </div>
        );
    }
}

// Se pueden exportar componentes de forma no default asi
export { Sinteticos }