// Para usar PureComponent, es necesario importar la libreria y extender la clase a PureComponent y no a component, para que realice la validacion boleana sobre las props que cambian en la clase
import React, { Component/*, PureComponent */ } from 'react';
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
        console.log('1. componentWillReceiveProps()');
        if(this.props.playa !== nextProps.playa){
            this.setState({
                src: PLAYAS[nextProps.playa]
            })
        }
    }



    // 1. Este metodo solo sirve para una validacion sencilla, es recomendable usar el PureComponent para validar por sistema las demas props
    shouldComponentUpdate(nextProps){
        // Este componente se ejecuta siempre y cuando reciba nuevas props o cambie su state
        console.log('2. shouldComponentUpdate()');
        // Formula para detectar nuevas y antiguas props
        console.log('Props antiguas:' + this.props.playa );
        console.log('Props Nuevas:' + nextProps.playa );
        
        // En el return de la funcion se deben ejecutar las condiciones para que el componente se renderize o no, es este caso le indicamos si las props cambian renderize si son iguales no. Con esto nos evitamos cargar el contenido varias veces 
        return this.props.playa !== nextProps.playa
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate()');
        console.log(nextProps, nextState);
        // Este componente es usado para hacer alguna animacion algun elemento antes de que se renderize
        const elemento = document.querySelector("img");
        // el metodo animate, es el usado en css que va de una pocision a otra haciendo una animacion
        elemento.animate([ { 
                filter: 'blur(0px)' 
            }, {
                filter: 'blur(0px)'
            }], { 
               duration: 500,
               easing: 'ease' 
            })  
    }


    // Esta es la ultima fase del ciclo de actualizacion, muestra ya las props y states recibidas e impresa en el render, recibe 2 parametros prevProps y prevState

    componentDidUpdate(prevProps, prevState){

        const element = document.querySelector('img');

        console.log('Alt Imagen', element.alt);
    }


    // Metodo render siempre de ultimas
    render(){
        console.log('3. render()');
        return(
            <ul id="row">
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
                //disabled={playas === this.CurrentState()}
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