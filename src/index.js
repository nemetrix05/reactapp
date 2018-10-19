import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import State from './components/state';
//import StatePartTwo from './components/statePart2';
import ConditionsOne from './components/condicionalP1';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ConditionsOne />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
