console.log('Clase 2.1');
console.log('Creación de objetos literales');
console.log('');

const objUser1 = {
    nombre  : 'Kike',
    email   : 'kikeestrada@gmail.com',
    edad    : 40
};

const objUser2 = {
    nombre  : 'Juanca',
    apellido: 'galindo',
    email   : 'juan@gmail.com',
    edad    : 35
};

// let nameUser1 = objUser1.nombre;
let nameUser1 = objUser1['nombre'];
console.log(nameUser1);
console.log('');

