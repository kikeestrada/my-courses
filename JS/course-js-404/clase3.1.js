/**
 * DOM
 * SAMD
 * 
 * 
 * Search 
 * Add
 * Modify
 * Delete
 * 
 * 
 * Create, Read, Update, Delete
 */


 /**
 * Obtener cosas de DOM
 */
// document.getElementById
// document.getElementsByClassName
// document.getElementsByName
// document.getElementsByTagName
console.log(document.getElementById('container'));
console.log(document.getElementsByClassName('otro-container'));
console.log(document.getElementsByName('fname'));
console.log(document.getElementsByTagName('h1'));


/**
 * osteriormente se agregan los queryselector
 */
// document.querySelector
// document.querySelectorAll
console.log(document.querySelector('div'));
console.log(document.querySelectorAll('div'));

/**
 * Create Add
 */

 var p01 = document.createElement('p');
 p01.innerHTML = 'Contenido';
 document.getElementById('container').appendChild(p01);

 /**
  * Modify
  */

  p01.style.color = '#f0f';
  p01.style.backgroundColor = '#ddd';
  var enlace = document.createElement('a');
  enlace.href = 'http://google.com';
  enlace.innerHTML = 'Ir a google';
  document.getElementById('container').appendChild(enlace);

  /**
   * Delete
   * Eliminar Nodos
   * Para el ejemplo esto debe estar comentado
   */
//   document.getElementById('container').removeChild(enlace);

/**
 * Buscar el parent
 */
// document.getElementsByTagName('p')

 (function(w,d,u){
    'use strict';
    /**
     * Leer u obtener cosas del DOM
     */
 
    //  jqury 90%
    var alias = 'jLite';
    var core = function(selector){
        var elements = d.querySelectorAll(selector);
        return (elements.length > 1)?elements:elements[0];
    }
    core.create = function(element){
        return d.createElement(element);
    }
    w.$ = w[alias] = core; 
})(window,document);

console.log(jLite('div')[1]);
console.log($('div')[0]);



