console.log('Clase 2.4');
console.log('Condicionales');

let edad = prompt('Dime tu edad');

if (edad < 12) {
    console.log('eres niño');
    if (edad < 2) {
        console.log('eres un bebé');
    }
} else if ( edad >= 12 && edad < 18) {
    console.log('eres adolescente')
} else if (edad >= 18 && edad < 60) {
    console.log('eres adulto')
} else {
    console.log('eres anciano')
}