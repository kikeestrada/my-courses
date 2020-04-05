console.log('Clase 4.3 - Ejecutar funciones dentro de otras funciones');

/* Funcion dentro de otra funcion */
function restar(a){
    return function(b){
        return a - b;
    }
}

// let miResta = restar(5);
let miResta = restar(5)(3);
console.log(miResta);