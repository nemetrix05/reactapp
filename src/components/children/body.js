import React, { Component } from 'react';

// Prop Children: Esta Prop es como hacer un template abierto y al ser envocado su contenido puede variar y ser reutilizable en otro componente, lo definimos con la etiqueta {this.prop.children}

class BodySon extends Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}


class Body extends Component{

    // Aqui envocamos el componente y modificamos su children
    render(){
        const {
            title
        } = this.props

        return (
            <div>
                <p>{title}</p>
                <BodySon>Elemento children modificado</BodySon>
                <br />
                <BodySon>segunda modificacion</BodySon>
            </div>
        );
    }

}

export {
    Body
}