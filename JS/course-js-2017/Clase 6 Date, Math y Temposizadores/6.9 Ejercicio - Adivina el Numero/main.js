console.log('Clase 6.9 - Ejercicio: Adivina el numero');
console.log('Funcion de numeros aleatorios');
let getRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
    // return Math.floor(Math.random() * (max - min) + min +1); //inckuye el max
};

console.log('El codigo esta comentado porque es un ejercicio de ciclo casi infinito');
//
// let guestNumber = (min,max) => {
//     let numMachine = getRandomNumber(min,max);
//     let numPlayer;
//     let count = 0;
//     do {
//         numPlayer = parseInt(prompt(`Adivina el número de la máquina (entre ${min} y ${max})`),10);
//         count++;
//         if (numPlayer > numMachine) {
//             alert(`Tu número es mayor que el de la máquina
// Vas ${count} ${count === 1 ? 'intento' : 'intentos'}`)
//         } else if (numPlayer < numMachine) {
//             alert(`Tu número es menor que el de la máquina
// Vas ${count} ${count === 1 ? 'intento' : 'intentos'}`)
//         } else {
//             alert(`¡Adivinaste el número en ${count} ${count === 1 ? 'intento' : 'intentos'}!`)
//         }
//     } while(numPlayer !== numMachine);
// };
//
// guestNumber(10,20);