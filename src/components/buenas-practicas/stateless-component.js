import React, { Component } from 'react';

// En este tipo de funciones, podemos seguir usando defaultProps
import PropTypes from 'prop-types';

// Este tipo de componentes convierten las declaradas por clase en funciones.

// Ventajas: Queda mas ordenado el codigo. Desventaja no se puede iniciar un state o los metodos del ciclo de vida

// 1. FORMA FUNCION | Recomendada si no usa state o ciclos de vida o es un componente estatico
// En una funcion se deben pasar las props y no iniciar el this.props
function Contenido (props){
    return (
        [
            <article key="article">
                <h2>{props.title}</h2>
                <p>{props.children}</p>
            </article>,
            <p key={props.title}>Otro</p>
        ]
    )
}

// Forma de usar las propstypes, si queremos usar la forma static, solo aplica en los declarados por clase

Contenido.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.number.isRequired
}

//2. FORMA CONSTANTE | Recomendada si no usa state o ciclos de vida o es un componente estatico

// Se usa como una arrou function, es otra forma de pasar las props, las props se pasan como objeto en los argumentos de la constante.
// se pueden pasar valores de props por defecto en una constante usando:const Boton = ({content = 'valor'}) =>

const Boton = ({content}) => (
    <button>
        {content}
    </button>
)


/*class Contenido extends Component {
    render(){
        return(
            [
                <article key="article">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.children}</p>
                </article>
            ]
        );
    }
}*/


class Articulo extends Component{
    render(){
        return(
            <div>
                <Contenido
                    title='Titulo de la noticia'
                >
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Contenido>

                <Boton 
                    content = 'Enviar'
                />
            </div>
        );
    }
}

export default Articulo;