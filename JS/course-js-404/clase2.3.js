// 'use strict';
/**
 * ABC
 * Apply, Bind & Call
 * orientados a funciones
 */

//  fn.apply(context,[])
//  fn.bind(context,...)
//  fn.call(context,...)

console.log('====== Carro global this ========')
function carro(){
    console.log(this);
    var nombre = 'toyota'
}
console.log(carro()); // window

var nissan = new carro();
nissan.nombre = 'nissan'
console.log(nissan.nombre);

// console.log(nissan);

// ABC

var auto = {
    nombre : 'Toyota'
}

console.log('====== APPLY ========')
/**
 * En el apply los argumentos se pasan por
 * arrays
 */

// carro.apply(auto);
carro.apply(auto,['verde']);




console.log('====== BIND ========')
/**
 * este no ejecuta la funcion
 * 
 * Lo que hace es que devuelve
 * carro bajo el contexto que le 
 * enviamos con auto
 */

var carro_modificado = carro.bind(auto);
console.log(carro_modificado());


console.log('====== CALL ========')
/**
 * en el call los argumentos no se pasan por un array
 * se pasan por valores
 * separados por comas.
 */
carro.call(auto,'verde');