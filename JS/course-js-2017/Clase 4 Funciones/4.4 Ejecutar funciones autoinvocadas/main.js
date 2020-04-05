console.log('Clase 4.4 - Ejecutar funciones autoinvocadas');

/* Funciones autoinvocadas */
let miMultiplicacion = (function(a,b) {
    return a * b;
})(5,2);

console.log(miMultiplicacion);
console.log('');


/* Funciones autoinvocadas */
let miMultiplicacion2 = ((a,b)=> {
    return a * b;
})(5,2);

console.log(miMultiplicacion2);