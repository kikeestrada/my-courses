console.log('Clase 3.4');
console.log('Metodos ES6 - find y findindex');
console.log('');


console.log('.find(cb) devuelve el primer ' +
    'elemento que cumpla con' +
    'una condicion');


let array = [1,2,3,4,5];
console.log(array);
console.log('');

let num = array.find( el => el > 3);
console.log('el valor consultado es: ' + num);
console.log('');

let numIndex = array.findIndex( el => el > 3);
console.log('El indice del valor consultado es: ' + numIndex);
console.log('');
