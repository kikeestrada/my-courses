console.log('Clase 2.3');
console.log('Métodos');

class Usuario {
    constructor(nombre, apellido, correo, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.edad = edad;
    }
    // metodos
    // saludar(){
    //    return console.log(`Hola, mi nombre es: ${this.nombre}`);
    // }

    saludar(){
        return document.write(`
            <div><p>Hola, mi nombre es: ${this.nombre}</p></div>
        `)
    }

    cambiarEdad (nuevaEdad){
       return this.edad = nuevaEdad;
    }
}

let kike = new Usuario('kike', 'Estrada', 'kikeestrada@gmail.com', 40);
console.log(kike);
console.log(kike.saludar());
console.log('');

kike.cambiarEdad(30);
console.log(kike);

let jose = new Usuario('jose', 'rojas', 'joserojas@gmail.com', 35);
console.log(jose);
console.log('');
console.log('');


