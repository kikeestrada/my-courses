console.log('Clase 5.1  Que es un Objeto y Clases en ES5');
console.log('');

console.log('clase -> plantilla a partir de la cual se crean objetos');
console.log('instancia -> cada objeto creado a partir de una clase');
console.log('constructor -> funcion que se ejecuta automaticamente al instanciar una clase');
console.log('propiedad -> valores');
console.log('metodos -> funciones');
console.log('');

console.log('En ES5');

console.log('Esto seria una funcion constructora');
var Profesor = function (nombre, apellido, pais){
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
};
var enrique = new Profesor('Enrique', 'Estrada', 'Costa Rica');
console.log(enrique);
console.log('');