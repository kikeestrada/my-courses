console.log('Clase 9');
console.log('Metodo Map');
console.log('Nos permite mapear creando un nuevo array para hacer un cambio' +
    'a cada elemento del array original');


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

console.log(estudiantes);
console.log(estudiantes[1]);
console.log('');

console.log('map(cb)');
console.log('transforma cada elemento del array segun el callback ' +
    'y devuelve un nuevo array');
console.log('');
console.log('obtener los nombres de los estudiantes');
console.log('');
console.log('A la antigua');

let estudiantesNombres = [];

for (let i = 0; i < estudiantes.length; i++) {
    estudiantesNombres.push(estudiantes[i].nombre)
}
console.log(estudiantesNombres);
console.log('');


console.log('Usando Map()');
let estudiantesNombres2 = estudiantes.map(
    estudiante => estudiante.nombre
);

console.log(estudiantesNombres2);
console.log('');



