import React, { Component } from 'react';
import { Crecive } from './willreciveprops'; 
import { ShouldC } from './shouldcomponent';
import { WillUpdate } from './willupdate';
import { DidC } from './didupdate';

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
                <h3 style={{'color': 'green'}}>ComponentWillReciveProps</h3>
                <Crecive />
                <hr />                
                <h3 style={{'color': 'green'}}>ShouldComponentUpdate</h3>
                <ShouldC />
                <hr />
                <h3 style={{'color': 'green'}}>componentWillUpdate</h3>
                <WillUpdate />
                <hr />   
                <h3 style={{'color': 'green'}}>componentDidUpdate</h3>
                <DidC />
                <hr />                                

            </div>
        );
        
    }
}

export default Actualizacion;
