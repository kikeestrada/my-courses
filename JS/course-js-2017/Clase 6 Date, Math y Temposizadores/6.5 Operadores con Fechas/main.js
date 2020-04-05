console.log('Clase 6.5 - Operaciones con fechas');




/*
* Operaciones con fechas
* Se operan con milisegundos (ms)
* 1s = 1000ms
* 1m = 1000ms * 60
* 1h = 1000ms * 60 * 60
* 1d = 1000ms * 60 * 60 * 24
* 1y = 1000ms * 60 * 60 * 24 * 365
* */



let msToDateObj = ms => {
    let seconds = Math.floor(ms / 1000),
        minutes = Math.floor(ms / (1000 * 60)),
        hours   = Math.floor(ms / (1000 * 60 * 60)),
        days    = Math.floor(ms / (1000 * 60 * 60 * 24)),
        years   = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
    return  { years, days, hours, minutes, seconds }
};

let msToExpandDateObj = ms => {
    let years   = msToDateObj(ms).years,
        days    = msToDateObj(ms).days % 365,
        hours   = msToDateObj(ms).hours % 24,
        minutes = msToDateObj(ms).minutes % 60,
        seconds = msToDateObj(ms).seconds % 60;
    return {years,days,hours,minutes,seconds}
};

let date    = new Date(),
    date2   = new Date('Feb 12 1979 05:45:36 GMT-0500');
console.log('(date - date2) Respuesta en Milisegundos');
console.log(date - date2);
console.log('');

console.log('Respuesta en Dias');
console.log(msToDateObj(date - date2));
console.log('');

console.log('Respuesta Completa');
console.log(msToExpandDateObj(date - date2));
console.log('');

