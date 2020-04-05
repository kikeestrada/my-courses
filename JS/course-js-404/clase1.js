'use strict';  

/** 
 * Como todo lenguage tiene
 * Variables
 * condicionales
 * Bucles
 * Funciones
 * Objetos
 */

/**
 * JS no es OO , esta basado en una base prototipica.
 * maneja objetos pero NO ES OO
 */

 /**
  * JS es interpretado y se ejecuta de arriba para abajo
  */

/**
 * En JS hay declaraciones que definen algo
 * 
 * Las Expresiones deveulven algo
 */

//  Declaracion
var nombre = 'kike';

// Expresion solo escribiendo el nombre de la variable
nombre;

// aqui omitimos el var sin usa el modo strict
numero = 5;

// sobreescribir variables

nombre = 'kike';

// luego sobreescribimos cambiando el valor de la variable inicial
nombre = 22;

// comentarios simple y multiple

//

/** */


/**Las comillas dobles o simples
 * 
 * '' solo es para texto
 * "" Ademas de texto evaluan si una variable esta declarada * 
 */

// Tipos de variables, todos tienen propiedades y metodos
// booleans
 var casado = true;

 // string
 var nombre = 'kike';

//  number
var edad = 40;

// arrays
var cosas = [];

// objects
// rana = {};

// regular expressions
 var email = /ab+c/;

 /**No podemos declarar una variable usando numeros */

//  var 4text = 5; esto esta mal

/**El simbolo de dollar no es de Jquery 
 * esta es una variable cualquiera ($)
 */

 /**Para la CONSOLA del navegador el simbolo de $ lo que muestra
  * un array del contenido del dom
  */

  /**El MDN de Mozilla establece los estandars de JS */


  /**Cuando creamos una variable y la invocamos y le damos punto(.) veremos que ya no es 
   * solamente una variable
   */
  var nombre = 'kike';
  nombre.toUpperCase();
  nombre.length;

//   tambien
'kike'.toUpperCase;

// con numeros vemos estos ejemplos
 var numero = 56;
 numero.toString;

//  aqui usamos doble punto
 56..toString();
 
/**La variable nombre tambien es un array */
 var nombre = 'kike';
 nombre[0];

 /**
  * Valores Booleans
  * true or false
  * &&      -> and
  * ||      -> or
  * !       -> diferente
  * ===     -> estrictamente igual
  * !==     -> no estrictamente igual
  * ==      -> igual
  * !=      -> no Igual
  */

  /**
   * concatenar + Escapes
   */

var apellido = 'Mc\'Donalds';

/**
 * Manejo de Flujo
 */

// Sentencia if
if(true){

}else if(false){
    
}
// operador ternario
(true)?'no':'si'; 


// sentencia switch
var piso = 4; 
switch(piso){
    case 3:
    // console.log('3')
    case 4:
        console.log('4')
        // break;
    case 5:
        console.log('5')
        break;
    default:   
        console.log('Default')
}

/**
 * Breack funciona para cualquier bucle condicional
 * porque detiene el proceso y hace case anidados.
 * 
 * aqui hacemos pruebas comentando el break
 */

 /**
  * Bucles
  * For
  * while
  */

 var i = 0; 
 while(i <= 2){
     console.log(i);
     i++
 } 

 
 for(var j = 0 ; j <= 2; j++){
     console.log(j);
     j++
 }

 for(
        console.log('A');
        // true; 
        console.log('B');
        console.log('C')
     ){
         console.log('D')
 } 

 function conectar(){
     console.log('conectar')
 };
 function checkVacio(){
     console.log('CheckVacio')
 };
 function ImprimirValor(){
     console.log('ImprimirValor')
 };

 for(
    conectar();
    // true; 
    checkVacio();
    ImprimirValor()
 ){
     console.log('D')
} 

