console.log('Clase 3.5');
console.log('Iteradores');

console.log('Te permite recorrer un array ' +
    'y guarda su estado ' +
    'anterior');

/**
 * son objetos que contienen un metodo next
 * ese metodo next devuelve otro objeto con dos propiedades
 * Las propiedades son:  value, done (boolean)
 */

console.log('.keys() .values() .entries()');
console.log('');

let array = [1,2,3,4,5];
console.log(array);
console.log('');

console.log('.keys()');
let iterador = array.keys();
console.log(iterador);
console.log('');

console.log(iterador.next());
console.log('Hola mundo');
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
