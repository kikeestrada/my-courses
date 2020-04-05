/**
 * Todo objeto tiene un prototipo
 * y el prototipo es un objeto
 * por ende tiene también prototipo
 * que va en cadena hacia arriba hasta
 * llegar a la unica excepció que es el
 * objeto window. Que es el único que no tiene
 * prototipo.
 * 
 * JS está basado en prototipos.
 */

 /**
  * aqui lo primero es acceder al prototipo
  * NO VAMOS a usar nada con NEW.
  * 
  */

 /**
  * Como accedemos al prototipo de algo?
  * 
  */ 

//   var a = {};
//   Object.getPrototypeOf(a)
//   a.__proto__;
//   a.constructor.prototype;

/**
 * El prototipo es un objeto que tiene a un objeto
 */

 /**
  * Este ejercicio no corre en Opera y en IE del 8 para abajo
  */

/**
 * Aqui No creamos nada, Solo obtuvimos el prototipo
 */  

 /**
  * aprenderemos a sacar el prototipo cero (0)
  */ 
 
 var manzana = {};
 console.log(manzana);
 console.log('primera forma de obtener el prototipo');
//  no Opera y IE <= 8
console.log(Object.getPrototypeOf(manzana)); 

console.log('segunda forma de obtener el prototipo');
//  no IE
console.log(manzana.__proto__);

console.log('tercera forma de obtener el prototipo');
// funciona en todos los navegadores
console.log(manzana.constructor.prototype);

/**
 * Todos los objeros creados comparten un mismo prototipo
 */

 /**
  * Toda funcion es un objeto y 
  * como tal tiene prototipo
  * que será asignado.
  */

function hola(){}
console.log(hola == Object); //false

/**
 * Hola tiene una function ó Metodo que se llama prototipo
 * pero NO ES el prototipo de la function
 * 
 * prototype NOT EQUAL __proto__
 */
console.log(hola.prototype);

/**
 * La forma de obtener el prototipo de hola() seria así
 *
 * Constructor es una function que usa NEW
 * para crear el nuevo objeto
 */
console.log(hola.constructor.prototype);

var saludo = hola;
console.log(saludo);

console.log(saludo.prototype);
console.log(saludo.constructor.prototype);

console.log('=====================');

/**
 * Creamos la function Foo que tiene como tal propiedades
 */
function Foo (){}

// aqui vemos el prototipo de la funcion
console.log(Foo.__proto__);
console.log('=====================');
// me muestra el objeto prototype
console.log(Foo.__proto__.__proto__);
console.log('=====================');
// aqui llegamos al top del nivel osea window
console.log(Foo.__proto__.__proto__.__proto__); // Null
console.log('=====================');
console.log(Foo.prototype);
console.log(Foo.prototype.__proto__); // Objeto
console.log(Foo.prototype.__proto__.__proto__); // Null
// aqui me muestra la function
console.log(Foo.prototype.constructor);
Foo.prototype.x = 10;
Foo.prototype.calculate = function(){};
console.log(Foo.prototype.x);
console.log(Foo.prototype.calculate);
console.log('======== CREAMOS B y C =========');

console.log('==========B===========');
var b = new Foo;
b.y = 20;
console.log(b.y);
console.log(b.x);
console.log(b.calculate);

console.log('==========C===========');
var c = new Foo;
c.y = 30;
console.log(c.y);
console.log(c.x);
console.log(c.calculate);
console.log('==========Creamos un obj global=======');
Object.prototype.batman = 'Obj Batman';
console.log('==========FOO===========');
console.log(Foo.batman);
console.log('==========B===========');
console.log(b.batman);
console.log('==========C===========');
console.log(close.batman);
console.log('==========Herencia Prototipica===========');
// herencia prototipica
console.log(Object.prototype.__proto__);
function nueva(){}
console.log(nueva.batman);

/**
 * herencia prototipica
 * __proto__ = {}
 */

 var servivo    = { respirar: function(){}  };
 var animal     = { patas:4                 };
 var anfibio    = { medio:'agua'            };
 var rana       = { color:'verde'           };

rana.__proto__      = anfibio;
anfibio.__proto__   = animal;
animal.__proto__    = servivo;

var kermit = rana;

console.log(rana.medio);
console.log(kermit);

/**
 * Herencia prototipica con funciones
 */

function fnSerVivo  (){
    this.respirar = function(){
        /**
         * este this sí es ser vivo
         * y se llama con NEW
         */
    }
}
function fnAnimal   (){ this.patas  = 4         }
function fnAnfibio  (){ this.medio  = 'agua';   }
function fnRana     (){ this.colo   = 'verde';  }

fnAnimal.prototype  = Object.create(new fnSerVivo);
fnAnfibio.prototype = Object.create(new fnAnimal);
fnRana.prototype    = Object.create(new fnAnfibio);

var rene = fnRana;
console.log(rene);

/**
 * Cadena pototipica ó
 * Herencia prototipica
 */







