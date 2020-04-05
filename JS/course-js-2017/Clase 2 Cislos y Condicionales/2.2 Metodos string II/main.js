console.log('Clase 2.2');
console.log('Metodos string II');

let saludo = 'Bienvenidos a Escuela Digital';
console.log(saludo);
console.log('');


console.log('Metodos con Parametros');
console.log('indexOf()');
console.log('');

console.log('Aqui mostramos el indice 1');
console.log(saludo[1]);
console.log('');

console.log('Aqui mostramos el indice de la primera letra');
console.log('en caso de que se repita y los demas os ignora');
console.log(saludo.indexOf('i'));
console.log('');

console.log('Aqui comienza a partir del indice 2');
console.log(saludo.indexOf('i',2));
console.log('');


console.log('Aqui devuelve el indice de la n a partir del indice 2');
console.log(saludo.indexOf('nid',2));
console.log('');

console.log('si no lo encuentra devuelve -1');
console.log(saludo.indexOf('ESCUELA'));
console.log('');


console.log('Aqui busca desde el ultimo indice');
console.log('en caso de que se repita y los demas os ignora');
console.log(saludo.lastIndexOf('i'));
console.log('');

console.log('Aqui busca desde el ultimo indice');
console.log('pero lo hace en reversa');
console.log(saludo.lastIndexOf('i', 2));
console.log('');

console.log('replace(oldString,newString)')
let nuevoSaludo = saludo.replace('Escuela Digital', 'Bextlán')
console.log('Saludo Original: ' + saludo);
console.log('Nuevo Saludo: ' + nuevoSaludo);
console.log('');


console.log('split convierte un string en un array');
console.log('split(\'separador\', N)');
let arraySaludo = saludo.split('');
console.log(arraySaludo);
console.log('');

let arraySaludo2 = saludo.split(' ');
console.log('Separado por palabras');
console.log(arraySaludo2);
console.log('');

let arraySaludo3 = saludo.split(' ', 2);
console.log('Que tena solamente 2 elementos');
console.log(arraySaludo3);
console.log('');


let arraySaludo4 = saludo.split('i');
console.log('Que usemos una letra como separador');
console.log(arraySaludo4);
console.log('');








