"use strict";console.log("Clase 3.11"),console.log(""),console.log("reduce()"),console.log("toma todos los elementos del array hace operaciones y devuelve un unico valor"),console.log("reduce(cb(prev, current, indice, initial))"),console.log("");var numeros=[2,4,6,8,10];console.log(numeros),console.log(""),console.log("Hacemos una suma");var suma=numeros.reduce(function(o,e){return o+e});console.log(suma),console.log(""),console.log("Obtenemos el valor mas alto");var max=numeros.reduce(function(o,e){return e<o?o:e});console.log(max),console.log("");
//# sourceMappingURL=main-dist.js.map