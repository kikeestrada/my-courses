console.log('Clase 4.6 4.6 - Ejecutar funciones apply y call');

function add(a,b,c) {
    return a + b + c;
}

console.log('Resultado de la suma');
console.log(add(1,2,3));
console.log('');

console.log('array de numeros');
let numeros = [2,3,4];
console.log(numeros);
console.log('Si sumamos el array: let myAdd = add(numeros)');
console.log('el array es concatenado como string porque es un tipo de dato');
let myAdd = add(numeros);
console.log(myAdd);
console.log('');

console.log('Usando apply');
console.log('let myAddApply = add.apply(undefined, numeros)');
let myAddApply = add.apply(undefined, numeros);
console.log(myAddApply);
console.log('');


console.log('Usando Call');
console.log('Call no admite un array, Solo admite los valores separaos por comas');
let myOtherAddApply = add.call(undefined, 1,2,3);
console.log(myOtherAddApply);
console.log('');