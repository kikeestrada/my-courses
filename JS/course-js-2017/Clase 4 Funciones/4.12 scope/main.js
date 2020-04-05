console.log('Clase 4.12 - Scope');

/* Scope es el ambito o contexto donde
*  se ejecuta una función y existen sus variables
* */

console.log('En es5 el unico scope local era el que creabamos con funciones');

console.log('Esta variable \'Hola\' esta en el contexto global');
var hola;
function saludar() { hola = 'Hola Mundo'; }
saludar();
console.log(hola);

function holaDeNuevo() { hola = 'Hola Otra vez'; }
holaDeNuevo();
console.log(hola);
console.log('');




console.log('Todo cambia si la variable esta definida dentro de una function');
function saludar2() { return hola = 'Hola Mundo desde adentro'; }
console.log(saludar2());
console.log('');


console.log('Con es6 la variable let tiene scope de bloque');
{
    var miSaludo = 'Hola a Todos';
    // let miSaludo = 'Hola a Todos';

}
console.log(miSaludo);
console.log('');






