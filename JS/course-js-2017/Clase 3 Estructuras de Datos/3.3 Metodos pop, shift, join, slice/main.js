console.log('Clase 3.3');
console.log('Metodos pop, shift, join, slice');
console.log('');


console.log(' Eliminar un solo elemento (sin parametros)');
console.log('Estos métodos devuelven el elemento eliminado');
console.log('');


let array = [1,2,3,4,'true',5,6];
console.log(array);

console.log('.pop() al final');
console.log('');
array.pop();
console.log(array);
console.log('');


console.log('.shift() al inicio');
console.log('');
array.shift();
console.log(array);
console.log('');


console.log('======================');
let array2 = [1,2,3,4,'true',5,6];
console.log(array2);
console.log('Obtener el elemento eliminado y almacenarlo en una variable');
console.log('');

let deletedEl = array2.shift();
console.log(array2);
console.log(deletedEl);

console.log('======================');
console.log('');

console.log('join convierte un array en un string');
console.log('.join(\'separador\')');
console.log('\'separador\' es por defecto una coma');

let array3 = [1,2,3,4,'true',5,6];
console.log(array3.join(''));
console.log(array3.join(' '));
console.log(array3.join(','));
console.log('======================');
console.log('');


console.log('splice()');
console.log('splice(a,b,items) añade o quita elementos modificando el array que estamos usando');
console.log('splice(a,b,items)');
console.log('splice(' +
    'indice por el que comienza,' +
    'numero de elementos que elimina,' +
    'items que agrega' +
    ')'
);

let array4 = [1,2,3,4,'true',5,6];
// array4.splice(2,1);
// array4.splice(2,2);
// array4.splice(2,2, 'nuevo elemento');
// array4.splice(2,0, 'nuevo elemento');
console.log(array4);
console.log('');

console.log('slice, este crea un nuevo array');
let array5 = [1,2,3,4,'true',5,6];
console.log(array5);
console.log('');
// let sliceArray = array5.slice(2,5);
// let sliceArray = array5.slice(2);
let sliceArray = array5.slice();
console.log(sliceArray);
