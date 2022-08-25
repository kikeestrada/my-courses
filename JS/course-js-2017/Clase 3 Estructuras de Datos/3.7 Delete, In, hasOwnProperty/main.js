console.log('Clase 3.7');
console.log('Delete, in y hasOwnProperty');

const objEd = {
    nombre: 'Escuela Digital',
    sedes: ['Bogotá', 'Lima'],
    profesores: ['Alexys', 'Daniel', 'Rafa', 'Jon', 'Francisco', 'José', 'Álvaro'],
    fundacion: 2010,
    mejorPlataforma: true,
    eslogan: 'Aprende Desde Cero',
    usp: 'Somos el primer sitio en español de Educación Orientada a Proyectos',
    saludar() {
        return 'Bienvenidos a Escuela Digital. Te deseamos un feliz aprendizaje';
    }
};


console.log(objEd);

console.log('Operadores en los objetos');
console.log('');

console.log('Delete -> Elimina una propiedad');
console.log('');
delete objEd.fundacion;
console.log(objEd);

console.log('in -> Devuelve true si existe una propiedad');
console.log('');

console.log('\'profesores\' in objEd');
console.log('profesores' in objEd);
Object.prototype.numeroMagico = 27;
console.log('');

console.log('\'numeroMagico\' in objEd');
console.log('numeroMagico' in objEd);
console.log(objEd.numeroMagico);
console.log('');

console.log('Aqui averiguamos si la propiedad es propia del objeto o es' +
    'de la cadena de prototipos');
console.log(objEd.hasOwnProperty('numeroMagico'));
console.log(objEd.hasOwnProperty('nombre'));