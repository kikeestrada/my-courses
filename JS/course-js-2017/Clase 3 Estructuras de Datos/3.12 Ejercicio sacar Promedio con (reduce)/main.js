console.log('Clase 3.12');
console.log('Ejercicio sacar promedio ( Método reduce)');
console.log('');

console.log('reduce(cb(prev, current [,indice, array] [,initial]))');
console.log('Array de Numeros');
let numeros = [2,4,60,8,10];
console.log(numeros);

let promedio = numeros.reduce( (a,b,i,arr) => {
    // b = b + a;
    b += a;

    // if (i === arr.length -1) {
    //     return b / arr.length;
    // }else{
    //     return b
    // }

    return i === arr.length -1 ? b / arr.length : b;
});
console.log(promedio);