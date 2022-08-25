console.log('Clase 6.3 - Ejercicio Date con formato personalizado');
console.log('');
/*
* Ejercicio 1: Imprimir la fecha y hora en nuestro formato personalizado
* */

let date = new Date();

let getStringDay = date => {
  let days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  return days[date.getDay()];
};

let getStringMonth = date => {
  let months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio','agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];
  return months[date.getMonth()];
};

let hourLeadingZero = num => ('0' + num).slice(-2);

let getAmPmHour = date => {
  let hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds(),
      amPm = hours >= 12 ? 'pm' : 'am';
  if ( amPm === 'pm' ) hours -= 12;
  return `${hourLeadingZero(hours)}:${hourLeadingZero(minutes)}:${hourLeadingZero(seconds)}${amPm}`
};


let dateFormated = `${getStringDay(date)} ${date.getDate()} de ${getStringMonth(date)} de ${date.getFullYear()}, ${getAmPmHour(date)}`;

console.log(dateFormated);