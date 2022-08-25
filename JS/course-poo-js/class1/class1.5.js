console.log('Clase 1.5');
console.log(' Declaración de objetos (ejemplo 1)');
console.log('');

// CLiente

const cliente = {
    nombre: 'Kike',
    apellido : 'Estrada',
    email : 'kikeestrada@gmail.com',
    pass : 'poipoi'
};

// esto seria sintaxis punto
console.log(cliente);
console.log(cliente.nombre);
console.log(cliente.apellido);
console.log(cliente.email);
console.log(cliente.pass);
console.log('');

// sistaxis corchetes
console.log(cliente);
console.log(cliente['nombre']);
console.log(cliente['apellido']);
console.log(cliente['email']);
console.log(cliente['pass']);
console.log('');


/**
 * aqui puedo acceder dinamicamente a los
 * atributos
 */

let nameComplete = 'nameComplete';
let na = 'nom';
let me = 'bre';
const table = {
    [nameComplete] : 'Kike',
    [`${na}${me}`] : 'Enrique'

};
console.log(table);