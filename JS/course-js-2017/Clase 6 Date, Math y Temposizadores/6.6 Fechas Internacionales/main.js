console.log('Clase 6.6 - Fechas internacionales');
console.log('');

/*
* Horarios y fechas internacionales
* .getUTC... esto es horario base internacional
* .getTimezoneOffset()
* */

let date = new Date();
console.log('');

console.log('Hora Local');
console.log(date.getHours());
console.log('');

console.log('hora internacional');
console.log(date.getUTCHours());
console.log('');

console.log('Diferencia en minutos del Meridiano G a mi zona horaria');
console.log(date.getTimezoneOffset());
console.log('');

console.log('Ejercicio para CodePen');
console.log('');

console.log('esta seria la horta del evento programado');
let zoneDate = new Date('Thu Jun 13 2019 17:00:00 GMT-0600 (Central Standard Time)');
let hours = zoneDate.getHours(),
    utcHours = zoneDate.getUTCHours(),
    diffHours = new Date().getTimezoneOffset() / 60;

document.body.textContent = `${utcHours - diffHours}`;