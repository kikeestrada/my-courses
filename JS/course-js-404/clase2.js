'use strict';  

/**
 * Comprender correctamente JS
 * JS NO TIENE CLASES
 */

/**
 * Recomendaciones
 * nombre.version.js
 * var NombreVariable
 * var CONSTANT
 * objeto.propiedad
 * objeto.metodo()
 * '' usar comillas simples
 * var Class
 */

/**
 * Funcion Declarada en 
 * su mínima expresión
 */
function fn01(){
console.log('fn01');
}
/**
 * En este caso solo nos dice 
 * en consola que existe una function.
 */
fn01;
/**
 * en este caso con el operador de
 * ejecución ya podemos printear la información.
 */
fn01();

/**
 * Funciones con parametros y Argumentos
 */
function suma(numX,numY){ //parameters
console.log(numX+numY);
}

console.log(suma(5,7)); //arguments


/**
 * Funciones sin parametros
 * Dinamica sobre N numero de
 */

function resta(){
var result = 0;
for (var i = arguments.length - 1; i >= 0; i--) {
    result += arguments[i];
};
return result;
}
console.log(resta(1,2));


/**
 * Funcion Expresada no anónima
 * es una variable que contiene 
 * a la function
 */

var fn04 = function fn03(){
console.log('fn Expresada')
}

console.log(fn04());
/**
 * este caso no funciona
 * aparece como undefined
 */
//  console.log(fn03());

/**
 * para evitar el problema de fn03
 * lo correcto es usar una funcion 
 * anónima
 */

var fn05 = function(){
console.log('FN expresada anonima');
}
console.log(fn05());

/**
 * Funcion constructora 
 * Esto no es muy comun usarlo
 */

var fn06 = new Function('console.log(5)');
console.log(fn06());

var fn07 = new Function('console.log(arguments)');
console.log(fn07(1,2,3));

var fn08 = new Function('x','y','console.log(x+y)');
console.log(fn08(1,9));

/**
 * Esto no es muy comun usarlo
 */
// eval('function fn06(x,y){ console.log(x+y)}');
// console.log(eval);