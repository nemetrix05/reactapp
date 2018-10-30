import React, { Component } from 'react';
import { WillUnmount } from './willunmount';

class BaseDesmontaje extends Component{
    render(){
        return(
            [
                <div key='contenedor'>
                    <h2
                        style={{
                            'color':'green',
                            'textAlign': 'center'
                        }}
                    >FASE DE DESMONTAJE</h2>
                    <hr />
                    <h4>Metodo ComponentWillUnmount ()</h4>
                    <WillUnmount />
                    <hr />
                </div>
            ]
        );
    }
}

export default BaseDesmontaje;