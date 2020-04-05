console.log('Clase 6.8 - Numero aleatorio');
console.log('');

console.log('Numero aleatorio entre 0 y 1');
console.log('let randomNumber = Math.random();');
let randomNumber = Math.random();
console.log(randomNumber);
console.log('');

console.log('El valor maximo que puede resultar');
let randomNumber2 = Math.floor(Math.random() *10);
console.log(randomNumber2);
console.log('');

console.log('Funcion de numeros aleatorios');
let getRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
    // return Math.floor(Math.random() * (max - min) + min +1); //inckuye el max
};

console.log(getRandomNumber(10,12));
console.log('');

let array = ['jose', 'carlos'];

console.log(array[getRandomNumber(0,array.length)]);