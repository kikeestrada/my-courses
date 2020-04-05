console.log('Clase 4.10 - Parámetros y argumentos');

let sumar = (a,b) => a + b;
let miSuma = sumar(2,3);
console.log(miSuma);
console.log('');

function sumar2(a,b,){
    // return a;
    // return b;
    // return c;
    return a + b;
    // console.log(arguments)
}
// sumar2(2,3);
console.log(sumar2(2,3));
console.log('');

/*
* Si hay más parámetros que argumentos, los argumentos faltantes son undefined
* Si hay más argumentos que parámetros, no devuelve error
* */
console.log('');

console.log('Sumar todos los argumentos ilimitados');
function sumarTodos() {
  console.log([...arguments]);
  return [...arguments].reduce((a,b) => a + b);
}

console.log(sumarTodos(1,2,3,4,5,6,7,8,9));
console.log('');



function sumar3(a, b) { return a + b; }
let numeros = [2,3];
// console.log(sumar3(numeros));
// console.log(sumar3.apply(undefined,numeros));
console.log('Con ES6');
console.log(sumar(...numeros));