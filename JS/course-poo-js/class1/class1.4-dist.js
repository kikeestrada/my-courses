'use strict';

console.log('Clase 1.4');
console.log('Objetos literales y prototipos');

var persona = {
    nombre: 'kike',
    edad: 40,
    saludar: function saludar() {
        console.log('Hola ' + this.nombre);
    }
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.saludar());
//# sourceMappingURL=class1.4-dist.js.map