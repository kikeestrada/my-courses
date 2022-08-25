/**
 * Crear elementos en el DOM
 */
var profesor = document.createElement('h1');
profesor.textContent = 'kikeestrada';
profesor.classList.add('class-teacher');
profesor.id = 'idTeacher';

// crea un elemento com ultimo hijo de otro
document.body.appendChild(profesor);
console.log(profesor);

var persona = document.createElement('em');
persona.textContent = 'persona creada';

// validamos primero
if(contenedorParaCreatElemento){
  contenedorParaCreatElemento.querySelector('span').appendChild(persona);
}