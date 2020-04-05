console.log('Clase 2.2');
console.log('Creación de clases');

// para crear una clase de tipo usuario

/**
 * Por convencion las clases se escriben
 * con la primera letra en mayuscula.
 */

class Usuario {
    /**
     * Necesitamos una function constructora
     * y recibe parametros
     */
    constructor(nombre, apellido, correo, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.edad = edad;
    }
}

let kike = new Usuario('kike', 'Estrada', 'kikeestrada@gmail.com', 40);
console.log('imprime un usuario');
console.log(kike);

let jose = new Usuario('jose', 'rojas', 'joserojas@gmail.com', 35);
console.log('imprime un usuario');
console.log(jose);