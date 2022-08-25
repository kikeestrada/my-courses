console.log('Clase 2.3');
console.log('Metodos string III');
console.log('');


let saludo = 'Bienvenidos a Escuela Digital';
console.log(saludo);
console.log('');


console.log('substring(a,b), substr(a,b), slice(a,b)');
console.log('Extraen una porcion del string usando 2 valores');
let substring,substr,slice;

console.log('substring');
console.log('');

console.log('substring(4) omite los primeros 4 caracteres');
substring = saludo.substring(4);
console.log(substring);
console.log('');


console.log('substring(4,7) extrae desde el indice a hasta el b - 1');
substring = saludo.substring(4,7);
console.log(substring);
console.log('');


console.log('substring(4,-1)');
console.log('si el segundo valor es negativo lo que hace es extraer hacia atras');
substring = saludo.substring(4,-1);
console.log(substring);
console.log('');

console.log('=========================');


console.log('substr');
console.log('toma una cantidad de caracteres a partir del indice indicado');
// substr = saludo.substr(4,5);
// substr = saludo.substr(-4,5); //aqui comienza acontar desde el final
substr = saludo.substr(-10,5);
console.log(substr);
console.log('');


console.log('=========================');
console.log('');


console.log('slice');
// slice = saludo.slice(4,7);
// slice = saludo.slice(4,-7);
slice = saludo.slice(-10,-7);
console.log(slice);
console.log('');


console.log('=========================');

console.log('Nuevos métodos ES6 (devuelven un boolean)');
console.log('.startsWith(), endsWith(), includes()');

console.log(saludo.startsWith('B'));
console.log(saludo.startsWith('b'));


console.log(saludo.endsWith('l'));
console.log(saludo.endsWith('d'));

console.log(saludo.includes('Escuela'));