console.log('Clase 6.2 - Date, Metodos y Get');
console.log('');
/*
* Métodos get
*
* .getFullYear()
* .getMonth() 0 -> enero
* .getHours()
* .getSeconds()
* .getMilliseconds()
* .getDate() -> Fecha del mes
* .getDay() -> Día de la semana (0 -> domingo)
* .getTime() -> milisegundos desde el 1 de enero de 1970
* */

let date = new Date();
console.log('getFullYear: '     + date.getFullYear());
console.log('getMonth '         + date.getMonth());
console.log('getHours: '        + date.getHours());
console.log('getSeconds: '      + date.getSeconds());
console.log('getMilliseconds: ' + date.getMilliseconds());
console.log('getDate: '         + date.getDate());
console.log('getDay: '          + date.getDay());
console.log('getTime: '         + date.getTime());