'use strict';

/**
 * Con React y JSX
 * este azucar sintactico hay que complilarlo
 * y transformarlo
 *
 * No es HTML , es JSX
 */

// const el = '<h1 id="title1">Hello World</h1>';
// const el =  <h1 id="title2">Hello World</h1>
// const el =  <h1 id="title2">Hello <span>World</span></h1>
// const el =  <h1 id="title2">Hello {2+5} <span>World</span></h1>

/**
 * Para saltar de linea lo recomendable es usar parentesis
 */

var el = React.createElement(
  'h1',
  { id: 'newtitile', className: 'mi-clase' },
  '\'Hello World Number \'',
  2 + 5,
  '\' created by kike\'',
  React.createElement(
    'em',
    null,
    ' Pura vida'
  )
)
// <h1> no pueden haber dos eleentos almismo nivel</h1>
;

ReactDOM.render(el, document.getElementById('app'));

/**
 * JSX previene ataques de inyeccion
 * cualquier valor o expresion la
 * converte en strings antes de imprimirlas
 *
 * Representa y se compila a Objetos
 *
 * Los elementos no son mutables
 * Son INMUTABLES como los fotogramas de una pelicula
 *
 * son un estado de la UI y no pueden mutarse
 *
 * para cambiar eso hay que volvder a renderizar un elemento
 *
 */
//# sourceMappingURL=example4-dist.js.map