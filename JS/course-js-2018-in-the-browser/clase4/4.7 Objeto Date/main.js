/**
 * Date extrae las fechas del sistema operativo
 * es un objeto y Se instancia
 */


// new Date()
 const now = new Date();
 console.log(now);

//  new Date(year,month,day)
 const aniversary = new Date(2000,4,21);
 console.log(aniversary);

//  new Date(year,month,day,hours,minutes,seconds)
 const aniversary2 = new Date(2000,4,21,20,30,12);
 console.log(aniversary2);

//  new Date(string)
const aniversary3 = new Date('May 14 2019 12:03:41 GMT-0600');
console.log(aniversary3);






// getFullYear()
const myDate = new Date();
const myYear = myDate.getFullYear();
console.log(myYear);
// getMinutes()
const myMinute = myDate.getMinutes();
console.log(myMinute);

// getSeconds()
const mySeconds = myDate.getSeconds();
console.log(mySeconds);


// getDate()
const myGetDay = myDate.getDate();
console.log(myGetDay);

// getDay()
const myDay = myDate.getDay();
console.log(myDay);

// getMonth()
const myMonth = myDate.getMonth();
console.log(myMonth);

// getTime()
const myGetTime = myDate.getTime();
console.log(myGetTime);
// milisegundos desde el 1 de enero de 1970


// getTimezoneOffset()
const timeZoneOffSet = new Date().getTimezoneOffset();
console.log(timeZoneOffSet);

// cumpleannos
const birthday = new Date(1979,2,12);
const today = new Date(2019,5,14);
console.log(today - birthday);

const getSeconds = ms => Math.round(ms/1000);
const getMinutes = ms => getSeconds(ms) / 60;