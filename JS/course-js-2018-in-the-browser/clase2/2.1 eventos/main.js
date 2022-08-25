
/**
 * Todo lo que comienza con ON
 * son eventos
 */
// Click inline onclick() function
function holamundo(){ console.log('click inline'); }


// click usando id (addEventListener
const title = document.getElementById('title');
/**
 * Estos son los dos parametros que recibe el addEventListener
 * title.addEventListener('eventName', eventHandler)
 */
title.addEventListener('click', () =>{
    console.log('click usando id');
})

/**
 * el callback es una function que se usa
 * como parametro
 */
var miAlert = document.getElementById('miAlert');
miAlert.addEventListener('click', ()=>{
    alert('Esto es un Alert')
});

/**
 * Otro Alert
 */

// const fnMiAlert2 = () => alert('Alert 2');
var fnMiAlert2 = function() {
    alert('Alert 2');
}

miAlert2.addEventListener('click', fnMiAlert2);

/**
 * Button
 */

 document.querySelector('button').addEventListener('click', fnMiAlert2);


/**
 * capturamos el texto del elemtno para 
 * printearlo en el alert
 * e.target.textContent
 */

const capturarTexto = e => console.log(e.target.textContent);
document.getElementById('button2').addEventListener('click', e =>{
    // console.log(e.target); 
    capturarTexto(e);
    
})
