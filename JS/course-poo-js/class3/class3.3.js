console.log('Clase 3.3');
console.log('Valores de un formulario (continuación)');

class Usuario{
    constructor(nombre, apellido, correo, contrasenna){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contrasenna = contrasenna;
    }
}





let form1 = document.getElementById('myForm');
form1.addEventListener('submit', e =>{
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    let correo = e.target.correo.value;
    let contrasenna = e.target.contrasenna.value;
});


// let objUsuario = {
//     nombre : nombre,
//     apellido : apellido,
//     correo : correo,
//     contrasenna : contrasenna
// };

// o tambien puede ser así
// let objUsuario = {
//     nombre,
//     apellido,
//     correo,
//     contrasenna
// };
// console.log(objUsuario);

// aqui empatamos con la clase
let objUsuario =  new Usuario(
    nombre,
    apellido,
    correo,
    contrasenna
);
console.log(objUsuario);
