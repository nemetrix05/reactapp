import React, { Component } from 'react';
import { Body } from './body';
import './children.css';


class Children extends Component{
    render(){
        return(
            <div className="app">
                <Body title="ARTICULOS"/>
            </div>
        );
    }
}


export default Children;