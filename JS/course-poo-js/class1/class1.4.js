console.log('Clase 1.4');
console.log('Objetos literales y prototipos');

const persona = {
    nombre: 'kike',
    edad: 40,
    saludar () {
        console.log(`Hola ${this.nombre}`);
    }
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.saludar());
