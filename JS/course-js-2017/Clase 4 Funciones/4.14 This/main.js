console.log('Clase 4.14 This');
console.log('');

//
// let myObj = {
//     nombre: 'Alvaro',
//     saludar() {
//         console.log(`Hola ${this.nombre}`)
//     }
// };
// myObj.saludar();
// console.log('');

'use strict';
function checkThis() {
    console.log(this);
}
checkThis();

console.log('use strict nos da undefined');
console.log('si el use strict nos da el objeto window');