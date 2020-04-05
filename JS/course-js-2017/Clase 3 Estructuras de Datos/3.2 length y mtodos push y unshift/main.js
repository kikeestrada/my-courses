console.log('Clase 3.2');
console.log('.length y metodos .push() y unshift()');
console.log('');

let array = [1,2,3,4,'true',5,6];
console.log(array);
console.log('');

console.log('indexOf()');
console.log('');


console.log('Devuelve el valor que está en ese indice');
console.log(array.indexOf(6));
console.log('');


console.log('Devuelve el indice del valor que buscamos');
console.log(array.indexOf('2'));
console.log('');

console.log('Como este no existe devuelve - 1');
console.log(array.indexOf(2));
console.log('');


console.log('========================');
console.log('');
console.log('');

console.log('Agregar elementos con');
console.log('.push(el1,el2,el3) -> Añade al final');
array.push('JavaScript');
console.log(array);
console.log('');

console.log('.unshift(el1,el2,el3) -> Añade al inicio');
array.unshift('Escuela');
console.log(array);
console.log('');

