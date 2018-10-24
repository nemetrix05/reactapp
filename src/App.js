import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Los componentes en REACT se definen de 3 formas

// Por medio de una funcion la cual devuelve el valor del componente, los componentes por funcion se muestran como una etiqueta HTML dentro de otro componente

/*Siempre para definir un componente, la primera letra va en mayuscula
function Titulo (props) {
  return <h1>CURSO DE REACT hyh</h1>
}
*/

/*Metodo 2: 
Usar una funcion y pasarle en las props las propiedades que queremos mostrar en el componente
- En la etiqueta html del componente se da el valor que llevara.


function Include (props){
  return <h1>{props.title}</h1>
}

*/

/*Metodo 3: 
Usar una funcion arrow en una sola linea y pasarle las props
const Include = () => {
  return(
    <h2>Componente Simple</h2> 
  );
}
 */

/*Metodo 4:
Usar el metodo clasico para definir un componente, haciendo una extencion de Component
*/

class Include extends Component{
  // Todo componente, debe tener un metodo de render() que retorna el "HTML o el JSX".

  // Para instanciar una prop, hay que usar la instancia THIS
  render(){
    return <h2>{this.props.title}</h2>
  }
}

// Tipos de Props
class PropsTypes extends Component{
  render() {

    // Para evitar escribir this.props todo el tiempo, se ordenan las props en un objeto y se le asigna por efecto el this.props al inicio. Siempre va al inicio del render()
    const {
      bolean,
      array,
      operation,
      number,
      object,
      introduccion
    } = this.props

    // puedo usar funciones ternarias para verificar una prop
    const Vefify = bolean ? 'CIERTO' : 'FALSO';
    const ConverArray = array.map(operation);

    return (
      // Los valores que no son de tipo string van siempre en llaves {} como atributo

      <div>
        <p>{introduccion}</p>
        <p>{number}</p>
        <p>{Vefify}</p>
        <p>{ConverArray.join(', ')}</p>
        <p>{object.sede}</p>
      </div>
    );
  }
}

// Para definir Props por defecto, instanciamos el componente y le asignamos el valor a las props con defaultProps.
class Title extends Component{
  render(){
    return (
      <h6>{this.props.text}</h6>
    );
  }
}

Title.defaultProps = {
  text: 'Titulo por defecto del app'
}


class App extends Component {
  render() {
    
    // Las variables ternarias las defino sin asignarle valor
    //  Consejo, ordenar las props alfabeticamente y separadas por linea

    // Podemos crear funciones y pasarle parametros a una prop operation={(number) => number * 5}

    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <img src={logo} className="App-logo" alt="logo" />
          <Include title="Valor de la propiedad ghdfgd" />
          
          <PropsTypes 
            array={[40,50]}
            number={45} 
            bolean={true}
            object={
              {
                'pais': 'Colombia',
                'sede': 'Salitre',
                'contrato': 'Indefinido',
                'salario': 450000
              }
            }
            operation={(number) => number * 5}
            introduccion={<h4>Texto renderizado dentro de una props</h4>}
          />
          
        </header>
      </div>
    );
  
  }

}

export default App;
