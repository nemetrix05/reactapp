import React, { Component } from 'react';
// Importamos el modulo proptypes para hacer obligatorio la validacion de props
import PropTypes from 'prop-types'


// El metodo componentWillReceiveProps: Solo se ejecuta si el componente recibe nuevas props


// Se definen las imagenes que se van a cargar en el componente
const PLAYAS = {
    'cancun': 'https://www.mexicancaribbean.com/photos/cancun/cancun-beaches/cancun-beach-6.jpg',
    'copacabana': 'https://images.mapsofworld.com/wp-content/uploads/2014/11/copacabana.jpg',
    'california': 'https://www.usnews.com/dims4/USNEWS/fc43a0a/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fc9%2F44%2Fa322166b4710a6a58280c67ddfa1%2F160516-malibucalifornia-stock.jpg'
}

// Para optimizar y simplificar el codigo es buena practica guardar todo en una constante la cual tenga el map de las key de playas

const CovertKeys = Object.keys(PLAYAS);

class GetImage extends Component{

    static propTypes = {
        // Aqui llama la prop y condiciona si recibe alguno de estos valores
        playa: PropTypes.oneOf(CovertKeys)
    }

    // Se crea un componente que recupera en el state cada los valores de la imagenes
    constructor(props){
        super(props)
        this.state = {
            src: PLAYAS[this.props.playa]
        }    
    }

    // Este componente reaccciona cuando las props cambian, se le deben pasar como parametro el valor: nextProps para saber cuales cambiaron
    componentWillReceiveProps(nextProps){    
        // Con las nuevas props recibidas actualizamos el estado para que cambie el source
        // esta condicional compara si las props han cambiado si vuelve y recibe el mismo valor renderizara solo una vez
        if(this.props.playa !== nextProps.playa){
            this.setState({
                src: PLAYAS[nextProps.playa]
            })
        }
    }


    // Metodo render siempre de ultimas
    render(){
        return(
            <ul>
                <li>
                    <img 
                        alt={this.props.playa}
                        src={this.state.src} 
                        width='200'
                    />
                </li>
            </ul>
        );
    }

}

class Crecive extends Component{

    // Aqui creamos un state independiente para hacer que un boton cambie los estados de y asi cambie la imagen

    constructor(props){
        super(props)
        this.state = {
            playas: 'cancun'
        }
    }
    
    CurrentState(){
        return this.state.playas
    }

    // Guardamos el boton en una funcion para reutilizarlo
    EachButton = (playas) =>{
        return(
            <button 
                disabled={playas === this.CurrentState()}
                key={playas} 
                onClick={() => this.setState({playas})}
            >
                {playas}
            </button>
        );
    } 

    // Metodo render del componente
    render(){

        return (
            <div>
                {CovertKeys.map(this.EachButton)}
                <p>Nombre playa: <strong>{this.CurrentState()}</strong></p>
                <GetImage playa={this.CurrentState()}/>
            </div>
        );
    }


}

// Solo exporta el componente
export {
    Crecive
}