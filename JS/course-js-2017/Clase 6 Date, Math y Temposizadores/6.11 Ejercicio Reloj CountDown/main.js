console.log('Clear 6.11 - Ejercicio reloj y countdown');
console.log('');
/*
* Ejercicio: reloj
* */

// let reloj = setInterval(function(){
//   document.body.innerHTML = new Date().toLocaleString();
// }, 1000);
// console.log('');



let countDown = ms => {
  let myCountDown = setInterval(()=>{
    ms -= 1000;
    let minutes = Math.floor(ms/(1000 * 60)),
        seconds = Math.floor((ms % (1000 * 60)) / 1000);
    document.body.innerHTML = `Quedan ${minutes} minutos y ${seconds} segundos`;
    if (ms === 0) {
      clearInterval(myCountDown);
      document.body.innerHTML = `Tiempo cumplido`;
    }
  },1000)
};

countDown(3000);