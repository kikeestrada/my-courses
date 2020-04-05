console.log('Claseb 1.3 Sintaxis');

console.log('JS es casesensitive y se usa Camel Case');

let miSaludo = 'Hola Mundo';
console.log(miSaludo);

console.log('El punto y coma es opcional pero el salto de linea lo omite');

let a;
if(1<5) a = 5; console.log(a);

console.log('en los bloques no se requiere el punto y coma');
console.log('los bloques hace una variable propia de un contexto');

{
    let saludo = 'hola';
    console.log(saludo);
}
//en este caso salufdo solo puede ser llamado desde su cntexto
// console.log(saludo);