console.log('Clase 3.11');
console.log('');
console.log('reduce()');
console.log('toma todos los elementos del array hace operaciones y devuelve un unico valor');
console.log('reduce(cb(prev, current, indice, initial))');
console.log('');


let numeros = [2,4,6,8,10];
console.log(numeros);
console.log('');


console.log('Hacemos una suma');
let suma = numeros.reduce( (a,b) => a + b );
console.log(suma);
console.log('');


console.log('Obtenemos el valor mas alto');
let max = numeros.reduce((a,b) => a > b ? a : b);
console.log(max);
console.log('');

