console.log('Clase 3.13');
console.log('Ejercicio mejor estudiante ( Método reduce)');

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


let mejorEstudiante = estudiantes
    .reduce((a,b) => {
        if (a.calificacion > b.calificacion) {
            return a
        } else {
            return b
        }

    });

console.log(mejorEstudiante);