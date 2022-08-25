console.log('Clase 5.2 - Clases en ES6');

// Clases en ES6
class Persona {
    constructor(nombre,apellido,pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.nombreCompleto = `${nombre} ${apellido}`
    }

    saludar() {
        return `Hola, soy ${this.nombreCompleto} y vivo en ${this.pais}`;
    }
}

const enrique = new Persona('Enrique', 'Estrada', 'Costa Rica');
console.log(enrique);
console.log(enrique.saludar());
