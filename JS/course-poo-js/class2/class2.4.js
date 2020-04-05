console.log('Clase 2.4');
console.log('Herencia');



class Usuario {
    constructor(nombre, apellido, correo, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.edad = edad;
    }
    // metodos
    saludar(){
        return document.write(`
            <div><p>Hola, mi nombre es: ${this.nombre}</p></div>
        `)
    }
}



class Profesor extends Usuario{
    constructor(nombre, apellido, correo, edad, experiencia, lenguaje){
        super(nombre, apellido, correo, edad);
        this.experiencia = experiencia;
        this.lenguaje = lenguaje;
    }
}


class Estudiante extends Usuario{
    constructor(nombre, apellido, correo, edad, activado){
        super(nombre, apellido, correo, edad);
        this.activado = activado;
    }
}


console.log('');
let alvaro = new Profesor(
    'Alvaro',
    'Felipe',
    'alvaro@gmail.com',
    40,
    5,
    'JavaScript'
);
console.log(alvaro);
console.log(alvaro.saludar());
console.log('');
console.log('');


let alejandro = new Estudiante(
    'Alejandro',
    'rodriguez',
    'alerodriguez@gmail.com',
    15,
    true,
    'JavaScript'
);
console.log(alejandro);
console.log(alejandro.saludar());
console.log('');
console.log('');

class Forma {
    constructor(alto,ancho, color){
        this.alto = alto;
        this.ancho = ancho;
        this.color = color;
    }
    dibujar(){
        return document.body.innerHTML = `
            <div style=" width: ${this.ancho}px; height: ${this.alto}px; background: ${this.color};"></div>
        `
    }
}

let forma1 = new Forma(50,50,'red');
console.log(forma1);
// console.log(forma1.dibujar());

