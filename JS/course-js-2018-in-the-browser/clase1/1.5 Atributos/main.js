/**
 * Get attribute devuelve un atributo
 */
console.log('Get Atrribute');
var elementoAtributo = document.getElementById('title');
console.log(elementoAtributo.getAttribute('id'));
console.log(elementoAtributo.getAttribute('class'));


/**Cuidado con los null en el dom */
if (elementoAtributo) {
  // algo si 
  /**
   * si hay un null la ejecucion 
   * sigue pero el elemento no se rompe
   */
}

/**
 * Set attribute agrega un attribute
 */
console.log('Set Atrribute');
elementoAtributo.setAttribute('class', 'new-title');
elementoAtributo.getAttribute('class')
console.log(elementoAtributo);

/**
 * ClassList
 * Add
 * Remove
 * Toogle
 */

 console.log('Add Class')
//  Add
elementoAtributo.classList.add('main-title', 'title-from-page');
console.log(elementoAtributo);

console.log('remove Class')
// removeclass
elementoAtributo.classList.remove('title-from-page');
console.log(elementoAtributo);

console.log('toogle Class')
// toogle
elementoAtributo.classList.toggle('new-class')
console.log(elementoAtributo);

