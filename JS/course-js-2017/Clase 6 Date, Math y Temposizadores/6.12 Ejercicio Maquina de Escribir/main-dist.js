"use strict";console.log("Clase 6.12 - Ejercicio maquina de escribir"),console.log("");var writing=function(e){var n=e.split(""),o=0,t=setInterval(function(){" "===n[o]?(document.body.innerHTML+=n[o],document.body.innerHTML+=n[o+1],o+=2):(document.body.innerHTML+=n[o],o++),o===n.length&&(clearInterval(t),document.body.style.color="red")},300)};writing("Esta es una practica de impresion de texto");
//# sourceMappingURL=main-dist.js.map