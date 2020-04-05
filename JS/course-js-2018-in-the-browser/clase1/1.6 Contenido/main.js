/**
 * Get attribute devuelve un atributo
 */
console.log('Get Atrribute');
var elementoAtributo = document.getElementById('title');



console.log('Text Content')
/**
 * Contenido
 */
console.log(title.textContent); // solo deveulve texto
console.log(title.innerHTML); // muestra el html
console.log(title.outerHTML); // devuelve todo el elemento como texto

/**
 * reemplaza texto pero 
 * no reconoce etiquetas html
 */

 /**
  * innerHTML no es estandar del dom,
  * es de IE portanto nos buena practica usarlo
  */
title.textContent = 'Hola mama <em>te amo</em>';
title.innerHTML = 'Hola mama <em>te amo</em>';
title.innerHTML = `
  Hola mama 
    <em> te amo mucho </em>
    `;