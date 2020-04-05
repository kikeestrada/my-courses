console.log('Clase 2.5');
console.log('Condicionales, Valores Truthy y falsy');
console.log('No son boolean pero tienen la misma equivalencia');
console.log('');



console.log('Truthy: Strings no vacios, [], {}, Numeros diferentes de cero');
console.log('Falsy: 0, String vacio, undefined, null, NaN');


let edad = prompt('Dime tu edad');

if (edad) {
    console.log('Ingresaste una valor truthy')
} else {
    console.log('Ingresaste un valor falsy')
}