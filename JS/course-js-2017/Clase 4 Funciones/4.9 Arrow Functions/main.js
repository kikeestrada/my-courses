console.log('Clase 4.9 - Arrow functions');


// let suma = function(a,b){ return a + b; };
let suma = (a,b) => a + b;
let miSuma = suma(1,2);
console.log(miSuma);
console.log('');

console.log('Si deseamos algo mas elaborado ocuparemos las llaves {}');
console.log('');


console.log('Ejercicio Para obtener el Cuadrado');
// let cuadrado = (a) => {
//     if (typeof a === 'number') { return a * a }
// };

let cuadrado = a => (typeof a === 'number') ? a * a : undefined;
let miCuadrado = cuadrado(6);
console.log(miCuadrado);
console.log('');


let myObj = (a,b) => ({a,b});
let myCustomObj = myObj('hola', 'mundo');
console.log(myCustomObj);




