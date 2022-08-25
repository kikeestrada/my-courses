/**
 * window es el objeto de mas alto nivel en el navegador
 * A diferencia de node JS no existe window, 
 * lo que existe es el objeto global
 */

//  window.console.log()
//  window.navigator 
//  window.location
//  window.history

let userResponse = confirm('Estas seguro?')
if (userResponse) {
    alert(' El usuario esta Seguro');
} else {
    alert(' El usuario NO esta Seguro');
}

// prompt
let userAge = prompt('Cual es tu edad');
alert(`La edad del usuario es ${userAge}`)



// open abre una nueva instancia en el navegador
window.open('https://cyberu.ed.cr/', 'CyberU', 'with=500, height= 500');

// close