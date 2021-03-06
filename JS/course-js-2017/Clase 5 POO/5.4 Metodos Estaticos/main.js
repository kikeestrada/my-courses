console.log('Clase 5.4 - Metodos Estaticos');
console.log('Son los que No requieren una instancia');
console.log('');
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
    static describirPersona(persona) {
        return `Esta persona se llama ${persona.nombreCompleto} y es de ${persona.pais}`
    }
}

const enrique = new Persona('Enrique', 'Estrada', 'Costa Rica');
console.log(enrique);
console.log(enrique.saludar());
console.log('');

console.log('Aqui creamos una nueva clase \'Profesor\'');
class Profesor extends Persona{
    constructor(nombre,apellido,pais,cursos){
        super(nombre, apellido, pais);
        this.cursos = cursos;
    }
    invitarAlCurso(){
        return `Hola, soy ${this.nombreCompleto}, profesor de tecnologia y te invito al curso ${this.cursos}`
    }
}

console.log('');
console.log('La clase Profesor Hereda todo de la Clase Persona');

const ProfEnrique = new Profesor('Enrique', 'Estrada', 'Costa Rica', 'JavaScript');
console.log(ProfEnrique);
console.log('Heredamos el metodo saludar()');
console.log(ProfEnrique.saludar());
console.log(ProfEnrique.invitarAlCurso());
console.log('');


console.log('En este caso no necesitamos instanciar el metoso, solo lollamamos y Listo!');
console.log('');
console.log(Persona.describirPersona(ProfEnrique));
console.log('');




class MiLibreria{
    constructor(){

    }
    static funcionalidadA(){
        return console.log('FuncionalidadA');
    }
}

console.log('');
Persona.prototype.propiedadEstatica= 'Valor de la Propiedad Estatica';
console.log(ProfEnrique.propiedadEstatica);

