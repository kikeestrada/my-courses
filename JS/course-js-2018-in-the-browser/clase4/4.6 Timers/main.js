/**
 * timmers permiten ejecutar acciones despues 
 * de un tiempo
 * o acciones que se repitan periodicamente
 */

 /**
  * setTimeout(callback,ms)
  * despues de cierta cantidad de milisegundos
  */




// setTimeout(() => {
//    console.log('hola mundo');
// }, 2000);




  /**
   * setInterval(callback,ms)
   *    clearInterval(interval)
   * 
   * esta ejecuta una accion varias veces
   * con un intervalo indicado en el segundo parametro
   */
 
   let count = 0;







//    primer ejemplo commentado
//    setInterval(() => {
//        count++
//        if (count > 1) {
//         console.log(`Hello ${count} vez`)
//        }else{
//         console.log(`Hello ${count} vez`)
//        }
       
//    }, interval);








// const saludarMuchasVeces = setInterval(() => {
//     count++
//     if (count > 1) {
//      console.log(`Hello ${count} vez`)
//     }else{
//      console.log(`Hello ${count} vez`)
//     }
//     if (count === 5) {
//         clearInterval(saludarMuchasVeces)        
//     }
    
// }, 1000);







// console.log(new Date().toLocaleString());   




// creamos un reloj
setInterval(()=>{
    const clock = document.getElementById('clock');
    if(clock) clock.textContent = new Date().toLocaleTimeString()
},1000)