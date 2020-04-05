/**
    * Colecciones de Nodos
    */
   console.log('=====nodeList=====')
  //  una lista de nodos
    var myNodeList = document.querySelectorAll('ul li');
    console.log(myNodeList)


    console.log('=====elementList=====')
    // lista de elementos
    var myElementList = document.getElementsByTagName('li');
    console.log(myElementList)

/**
 * Ambos no son arrays
 * entonces debemos convertirlos en arrays
 */
 
console.log('=====Select ul li=====') 
// var allItems = Array.from(document.querySelectorAll('ul li'));
// var allItems = Array.from(document.getElementsByTagName('li'));
var allItems = Array.from(myNodeList);
// var allItems = Array.from(myElementList);
allItems.map(el => el.style.background = 'yellow');




// Comentar y descomentar estos ejercicios para ver que es lo que hacen
/**
 * Eliminar elementos */

allItems.map(el => {
  if(el.textContent.trim().toUpperCase() === 'MODEL'){
    el.remove();    
  }
})

/**
 * for of to delete elements
 */

for (const el of allItems) {
  if(el.textContent.trim().toUpperCase() === 'OTRO'){
        el.remove();    
      }
}

