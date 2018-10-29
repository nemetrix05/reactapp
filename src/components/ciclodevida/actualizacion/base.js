import React, { Component } from 'react';
import { Crecive } from './willreciveprops'; 

// El ciclo de actualizacion solo se ejecuta cuando el componente va recibir nuevas props o va actualizar su state

class Actualizacion extends Component{
    
    componentDidMount(){
        //alert('la aplicacion ha cargado');
    }
    
    render(){
        return(
            <div className="wrapper">
                <h2 style={{
                    'textAlign':'center',
                    'color':'red'
                    }}>{this.props.content}</h2>
                <hr />
                <Crecive />
            </div>
        );
        
    }
}

export default Actualizacion;