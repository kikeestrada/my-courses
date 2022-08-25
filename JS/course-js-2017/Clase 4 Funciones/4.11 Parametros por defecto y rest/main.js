console.log('Clase 4.11 - Parámetros por defecto y rest');

/* Parametros rest */
// function sumarTodos(...elements) {
//     return elements.reduce((a,b) => a + b);
// }

// let sumarTodos = (...elements) => {
//     return elements.reduce((a,b) => a + b);
// };

let sumarTodos = (...elements) => elements.reduce((a,b) => a + b);
let miSuma = sumarTodos(1,2,3,4,5,6,7,8,9,10);
console.log(miSuma);
console.log('');


console.log('Aqui los parametros son ignorados');
let sumarTodos2 = (m, n, ...elements) => elements.reduce((a,b) => a + b);
let miSuma2 = sumarTodos2(1,2,3,4,5,6,7,8,9,10);
// let miSuma2 = sumarTodos2('a', 'b', 1,2,3,4,5,6,7,8,9,10);
console.log(miSuma2);
console.log('');