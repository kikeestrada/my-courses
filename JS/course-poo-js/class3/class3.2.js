console.log('Clase 3.2');
console.log('Valores de un formulario');

let form1 = document.getElementById('myForm');
form1.addEventListener('submit', e =>{
 e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.nombre);
    // console.log(e.target.nombre.value);
    profesor.textContent = e.target.nombre.value;
});


let profesor = document.createElement('h1');
profesor.classList.add('class-teacher');
profesor.id = 'idTeacher';

// crea un elemento com ultimo hijo de otro
document.body.appendChild(profesor);