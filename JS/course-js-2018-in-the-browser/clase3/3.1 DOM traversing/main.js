const parent = document.getElementById('parent');
console.log('')
console.log('parent')
console.log(parent);


console.log('')
console.log('parent.children')
/**
 * Devuelve un html 
 * collection con todos los div 
 * que son hijos pero no devuelve 
 * lo nietos
 */
console.log(parent.children);

console.log('')
console.log('parent.querySelectorAll(div)')
/**
 * Este devuelve todos los elementos
 * Los Hijos y los nietos
 */
console.log(parent.querySelectorAll('div'));


console.log('')
console.log('parent.childNodes')
/**
 * En este caso devuelve todos los elementos
 * y adema devuelve los textos
 */
console.log(parent.childNodes);


/**
 * OJO CON LA PALABRA ELEMENT 
 * porque siempre te devuelve un 
 * elemento 
 * */


console.log('')
console.log('parent.firstChild')
// Devuelve texto
console.log(parent.firstChild); 


console.log('')
// para tener el primer elemento sí o sí
console.log('parent.firstElementChild')
console.log(parent.firstElementChild);


/**
 * Con el first y last child 
 * ojo cuando hay salto de liniea entre el ultimo hijo
 * y el cierre de la etiqueta del parent
 */


console.log('')
console.log('parent.lastElementChild')
console.log(parent.lastElementChild);


console.log('')
console.log('parent.hasChildNodes()')
/**
 * Devuelve true si el elemento seleccionado tiene hijos
 */
console.log(parent.hasChildNodes());

console.log('')
console.log('')
console.log('============= Elementos Hermanos =============')

console.log('')
console.log('granson')
const grandSon2 = document.getElementById('grandSon2');


console.log('')
console.log('granson.nextSibling')
console.log(grandSon2.nextSibling);


console.log('')
console.log('granson.nextElementSibling')
console.log(grandSon2.nextElementSibling);


console.log('')
console.log('granson.nextSibling')
console.log(grandSon2.nextSibling);


console.log('')
console.log('granson.previousElementSibling')
console.log(grandSon2.previousElementSibling);

console.log('')
console.log('granson.previousSibling')
console.log(grandSon2.previousSibling); 


console.log('')
console.log('granson.parentElement')
console.log(grandSon2.parentElement);


console.log('')
console.log('granson.parentNode')
console.log(grandSon2.parentNode);


console.log('')
// subir varios niveles
console.log('granson.parentElement.parentElement')
console.log(grandSon2.parentElement.parentElement);

