console.log('Clase 1.8');
console.log('Numeros');


let numero1 = 2;
let numero2 = '2';
let numero3 = '2a';
let amigo = 'kikeestrada';
let saludo1 = 'Bienvenido ' + amigo;
console.log(saludo1);
console.log('');


let saludo2 = `Bienvenido, ${amigo}. ${numero1 * 3}`;
console.log(saludo2);
console.log('');


let saludo3 = `Bienvenido, ${amigo}. ${numero2 * 3}`;
console.log(saludo3);
console.log('');


let saludo4 = `Bienvenido, ${amigo}. ${numero3 * 3}`;
console.log(saludo4);
console.log('');


console.log('Nacimiento');

let birthdate = 1979;
let year = new Date().getFullYear();
let age = year - birthdate;
console.log(age);
console.log('');

console.log('Operaciones mixtas');
console.log(5 + 5);
console.log(5 + '5'); // concatena con el simbolo +
console.log('');


console.log('Booleans');
if('a' == 'b'){
    console.log('son iguales')
}else{
    console.log('NO son iguales')
}
console.log('');



console.log('undefined');
console.log('Es cuando no se le asigna un valor a una variable');
let VariableNoDefinida;
console.log(VariableNoDefinida);
console.log('');


console.log('null');
console.log('Cuando no existe un valor');
let title = document.getElementById('title');
console.log(title);
console.log('');

console.log('typeof');
console.log('Devuelve el tipo de dato');
console.log(typeof VariableNoDefinida);
console.log(typeof title);
console.log('');