'use strict';
/**
 * IIFE
 */
console.log('=========IIFE===========');
 (function(w,d,u){
    //  code
    console.log('esto es un iife')
 })(window, document);


 console.log('=========Hoisting===========');
 /**
  * Hoisting
  */

/**
 * JS al ser interpretado se ejecuta de arriba para abajo
 */


  /**
   * Si ejecutamos el console.log debemos declarar
   * la variable primero
   * por asunto del hoisting
   */
  var saludo = 'saludo arriba';
  console.log(saludo);
  var saludo = 'saludo abajo';
/**
 * ejercicio de nivel de hoisting
 */
var papel = 'papel afuera';
function otraFunction(){
    console.log('otraFunction Afuera');
}
function nivel (){
    var papel = 'papel adentro arriba';
    console.log(papel);
    otraFunction();
    var papel = 'papel adentro abajo';
    function otraFunction(){
        console.log('otraFunction Adentro');
    }
}
console.log(nivel());


// ===============

/**
 * Scope
 * cada vez que creamos una function el contexto 
 * de this y arguments se resetea
 * y this queda señalando al objeto global window
 */

 var persona = 'persona afuera'
 function tierra(){
     var persona = 'persona adentro'
     function luna(){
         var persona = 'persona adentro de Luna'
         console.log(persona)
     }
     luna();
 }

 console.log(tierra()); 


//  Objetos
/**
 * todos loa obj tienen un valor primitivo
 * Casi todo se puede instanciar con un new
 * JS no trabaja el new igual que otros lenguages
 * 
 * Todos los tipos de valores que podemos asignar
 * todos tienen un new y se pueden instanciar.
 */

var obj01 = 'Obj01';
console.log(obj01);
console.log(obj01.length);
console.log(obj01[0]);


var obj02 = new String('Hola Obj02')
console.log(obj02);
console.log(obj02.length);
console.log(obj02.toString());
console.log(obj02[5]);

var obj03= 42;
console.log(obj03);

var obj04 = new Array();
console.log(obj04); 

var obj05 = new Number(45);
console.log(obj05);

var obj06 = {};
console.log(obj06);

var obj07 = new Object();
console.log(obj07);


//Objeto

var rana = {
	color: 'Verde',
	genero: 'Hembra',
	cantidad: 5,
	saltar: function(){ 
		console.log('Saltar');
	},
	get berrugas(){
		return 'return Kermit' + ' ' + this.cantidad;
	},
	set berrugas(valor){
		this.cantidad = valor;
	}
};


console.log(rana);
console.log(rana.color);
console.log(rana.genero);
console.log(rana.saltar());
console.log(rana.berrugas);
// rana.berrugas(18) esto esta mal
rana.berrugas = 18
console.log(rana.berrugas);


/**
 * Esto es una referencia
 * No es una instancia
 * No es un clon
 */
var kermit = rana;
console.log(kermit.color);
console.log(rana.color);


/**
 * Clases, Constructor en JS
 * 
 * function constructor
 * La misma funcion es el metodo init o constructor
 * 
 * Usa las funciones como clases
 * 
 */

function fnRana(){
    console.log('Hola fnRana !!');
}
fnRana();


/**
 * Ambas instancias con propiedades distintas
 */

 /**
 * Cuando hacemos new a una funcion
 * lo que hacemos es crear un objeto 
 * con el nombre de esa funcion
 */

var otroKermit = new fnRana;
console.log(otroKermit);
otroKermit.color = 'verde';
console.log(otroKermit);

var otroRene = new fnRana;
console.log(otroRene);
otroRene.color = 'azul';
console.log(otroRene);


/**
 * Ejemplo con una funcion expresada
 * Aqui vemos diferentes patrones
 */

var rana2 = function(){}
var sapito1 = new rana2;
console.log(sapito1);

var rana3 = function nombre(){}
var sapito2 = new rana3;
console.log(sapito2);

/**
 * Ejemplo con los osos
 * de asignacion de valores
 * e instancias
 */


 function fnOsito(){
     this.nombre = 'nombre';
     this.saltar = function(){
         console.log('saltar');
     }
 }

 var winnie = new fnOsito;
 console.log(winnie);
 console.log(winnie.saltar());
 winnie.nombre = 'winnie';
 console.log(winnie);



 var yogui = new fnOsito;
 console.log(yogui);
 console.log(yogui.saltar());
 yogui.nombre = 'yogui';
 console.log(yogui);

console.log( winnie.saltar === yogui.saltar);



 





