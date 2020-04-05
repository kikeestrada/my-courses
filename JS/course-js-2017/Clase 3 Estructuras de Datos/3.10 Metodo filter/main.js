console.log('Clase 3.10');

console.log('filter');
console.log('filtra algunos elementos del array original y ' +
    'los devuelve en un nuevo array');
console.log('');

let estudiantes = [
    {
        nombre: 'Carlos',
        calificacion: 20
    },
    {
        nombre: 'Juan',
        calificacion: 12
    },
    {
        nombre: 'María',
        calificacion: 9
    },
    {
        nombre: 'Pepe',
        calificacion: 7
    },
    {
        nombre: 'Arturo',
        calificacion: 17
    },
];
console.log('');
console.log('Obtendremos los estudiantes que han aprobado el curso' +
    'si la calificacion es mayor que 10');

let estudiantesAprobados = estudiantes.filter(
    estudiante => estudiante.calificacion > 10
);
console.log('estudiantesAprobados Devuelve Objetos');
console.log(estudiantesAprobados);
console.log('');

console.log('Hacemos un map de los que aprobaron en un nuevo array');
let estudiantesAprobadosNombres = estudiantesAprobados.map(
    estudiante => estudiante.nombre
);
console.log(estudiantesAprobadosNombres);
console.log('');
