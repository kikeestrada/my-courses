// 'use strict';

/**
 * Clases, Propiedades y Metodos
 */

/**
 * this (contexto)
 * Patrones de invocación
 * Toda function o this que no sea llamado
 * por medio de algun patgron de invocación 
 * SIEMPRE apunta al objeto window.
 * 
 * 
 * En JS This NO ES parent PORFAVORRRRR
 * 
 */
console.log('===Por Method===');

 /**
  * 
  * Method
  * 
  * Aqui es cuando this esta en un metodo
  * de un objeto cualquiera
  * aqui this pertenece a fruta
  * 
  * Toda function genera un scope totalmemte diferente
  * renueva el this deacuerdo al patron de invocacion 
  * al igual que la parte de argumentos.
  *   
  */

/**
 * this siempre va a apuntar al objeto global a 
 * menos que su patron de invocacion sea diferente
 */


  /**
   * Method 1
   * aqui this esta dentro de una funcion
   * y su valor es el valor de fruta
   * 
   */
 var fruta = {
    obj     : this, // aqui this es una propiedad
    color   : 'amarillo',
    sabor   : function(){
        console.log(this);
    }
}
console.log(fruta);
// console.log(fruta.obj);
// console.log(fruta.color);
// console.log(fruta.sabor());
 
console.log('===Por function===');

/**
 * 2 Por funcion
 */

function contexto02 (){
    console.log(this);
}
 console.log(contexto02());


 console.log('===Verdura===');

 var verdura = {
    obj     : this, // aqui this es una propiedad
    color   : 'amarillo',
    sabor   : function(){
        // patron de invocacion sabor();
        console.log(this);
        function fnInterna(){
            /**
             * cuando se crea una function nueva
             * se borra todo
             * this vuelve a referenciar a window y
             * todo queda nuevamente igual
              */
            console.log(this);
        }
        fnInterna();
    }
 }
// console.log(verdura);
console.log(verdura.sabor());

console.log('==fruta==');

var fruta = {
    obj     : this, // aqui this es una propiedad
    color   : 'amarillo',
    sabor   : function(){
        console.log(this);
        var that = this
        function fnInterna(){
            console.log(that);
            function on (){
                // este referencia a window
                console.log(this)
            }
            on();
        }
        fnInterna();
    }
}
// console.log(fruta);
console.log(fruta.sabor());

console.log('===constructor===');

/**
 * Patron de invocacion por construccion
 * 
 * Que pasa con this cuando viene sobre 
 * un contexto de construccion
 */

 function carro(){
     console.log(this);
 }
 carro(); // window

 var nissan = new carro();
 console.log(nissan);