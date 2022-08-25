console.log('Clase 6.10 - Timers');
console.log('');
console.log('Timers');

console.log('setTimeout(cb,t)');
console.log('Ejecuta una vez');

let myTimeOut = setTimeout(() => { console.log('Hola Mundo');},3000);
console.log(myTimeOut);


console.log('setInterval(cb,t)');
console.log('Ejecuta n veces en intervalos, segun el segundo parámetro');
let myInterval = setInterval(()=>{
    console.log('Hola Mundo');
    },3000);
console.log(myInterval);
console.log('');

let count = 0;
let myInterval2 = setInterval(()=>{
    console.log(++count);
    if (count == 3) {
        clearInterval(myinterval2)
    }
},3000);
console.log(myInterval2);
