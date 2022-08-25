console.log('Clase 1.5 Variables y constantes');
console.log('Clase 1.5 Variables y constantes');



let precio = 200,
    impuesto = precio * 0.18,
    descuento = precio * 0.1,
    precioFinal = precio + impuesto - descuento;

console.log(precioFinal);


const myYear = 2010;
console.log(myYear);
// myYear = 'sdsd';
console.log(myYear);


console.log('con let tenemos un scope mas fuerte');
{
    let a = 'a';
    console.log(a)
}

{
    let a = 'b';
    console.log(a)
}