import React, { Component } from 'react';

// Luego se importa la libreria de propTypes
import PropTypes from 'prop-types';

// Prop Children: Esta Prop es como hacer un template abierto y al ser envocado su contenido puede variar y ser reutilizable en otro componente, lo definimos con la etiqueta {this.prop.children}

class BodySon extends Component{

        // FORMA 2: Usando la dependencia Proptypes, poner antes del constructor, para ponerla obligatoria hay que poner la propiedad isRequired
        static propTypes = {
            fecha: PropTypes.string.isRequired
        }


        // FORMA 1 validacion props: Se puede hacer la validadcion para que una prop quede obligatoria en el constructor, al pasarle el parametro props se conecta el constructor con las props
        /*constructor(props){
            super(props)
            // al llamar una prop dentro del constructor esta NO DEBE TENER EL THIS
            if(typeof props.fecha === 'undefined'){
                console.error('La prop fecha es requerida');
            }else{
                console.log('La prop existe!!')
            }
        }    */

    render(){

        const {
            noticia,
            fecha,
            categoria,
            children,
        } = this.props

        // Hay otra forma de validacion de props, es usando una anotacion {prop && quese muestra si esta }
        return(
            <div className="paragraph">
                <h1>{noticia}</h1>
                { fecha && <h2>Fecha: {fecha} <br /></h2>}
                <strong>{categoria}</strong>
               <div>{children}</div>
            </div>
        );
    }
}

// Forma de añadir proptypes, se la asigna a la clase el objeto proptypes y en cada uno le pasamos la prop que queremos validar y que tipo de valor es
/*BodySon.propTypes = {

    // Aqui van todas las props a validar
    fecha: Proptypes.string.isRequired
}*/



class Body extends Component{

    // Aqui envocamos el componente y modificamos su children
    render(){
        const {
            title
        } = this.props

        return (
            <div>
                <p>{title}</p>
                <hr />
                <BodySon
                    categoria = 'Deportes'
                    fecha     = {false}
                    noticia   = 'Titulo Noticia'                     
                >
                <p>this is the child component</p>
                </BodySon>
                <hr />           
            </div>
        );
    }

}

export {
    Body
}