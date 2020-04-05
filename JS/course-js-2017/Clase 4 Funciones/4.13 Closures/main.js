console.log('Clase 4.13 - Closures');
console.log('');

/* CLOSURES */
function saludar() {
  let saludo = 'Hola';
  return function saludarInterno(amigo) {
    console.log(`${saludo} ${amigo} `);
  }
}

let miSaludo = saludar();
miSaludo('Alexys');
miSaludo('Daniel');

// function afuera() {
//     let numero = 1;
//     return function() {
//         numero++;
//         console.log(numero);
//     }
// }


let afuera = ()=> {
    let numero = 1;
    return ()=> {
        numero++;
        console.log(numero);
    }
};

let aumentar = afuera();
aumentar();
aumentar();
aumentar();
aumentar();
aumentar();
console.log('');


afuera()();
afuera()();
afuera()();
afuera()();
afuera()();