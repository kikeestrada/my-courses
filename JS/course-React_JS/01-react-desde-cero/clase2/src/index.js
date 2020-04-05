import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



/*
* Ejemplo 1
* Aqui importamos el componente que esta en el app.js con JSX
* */
// ReactDOM.render(<App />, document.getElementById('root'));
const root = document.getElementById('root');
ReactDOM.render(<App />, root);








//==============================================================================
/*
* Ejemplo 2
* aqui conectamos solo con React
* */
// const root = document.getElementById('root');
/* elemento Recibe tres propiedades
* const elemento = React.createElement(componente, propiedades, hijos)
* */
// const elemento = React.createElement(
//     'h1', //componente
//     {
//         className : 'cls', //propiedades
//         id:'myId'
//     },
//     'Hola Mundo desde index.JS' //hijos
// );
//
// ReactDOM.render(elemento, root);






//==============================================================================
/*
* Ejemplo 3
*Esta es utra forma usando JSX
 *  */
// const root = document.getElementById('root');
// ReactDOM.render(<h1>Hola Mundo desde index JS usando JSX</h1>, root);

/**
 * todo componente debe tener el cierre de etiqueta
 *
 */

