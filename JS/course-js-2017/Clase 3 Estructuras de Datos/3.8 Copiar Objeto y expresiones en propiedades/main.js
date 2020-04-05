console.log('Clase 3.8');
console.log('Copiar objeto y expresiones en propiedades');
console.log('');

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
console.log('Este es el objeto original objEd');
console.log(objEd);


// ES6
console.log('Esta es una copia del objEd la cual llamamos objEd2');
console.log('Los dos son independientes y no estan amarrados');
console.log('let objEd2 = Object.assign({},objEd);');
let objEd2 = Object.assign({},objEd);
console.log(objEd2);
console.log('');

console.log('Asignar variables existentes a propiedades');
let a = 'hola', b = 'mundo';
let myObj = {
    a,
    b
};
console.log(myObj);
console.log('');


console.log('Expresiones en propiedades');
let myObj2 = {
    [a + b]: 'Hola mundo'
};

console.log(myObj2);