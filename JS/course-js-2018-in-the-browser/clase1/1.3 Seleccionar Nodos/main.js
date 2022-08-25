/**
  * Seleccionar Nodos
  */

/**
 * Cuando es con id se usan const
 * y el getElementById SIEMPRE
 * Es buena practica
 */ 
var title = document.getElementById('title');
title.style.background = 'red';
title.style.color = 'white';
title.style.textAlign = 'center';
console.log(title);

/**
 * querySelector y
 * querySelectorAll
 * son para seleccionar como elementos de CSS.
 * con el (.) y el (#)
 */
var title2 = document.querySelector('#title2');
title2.style.background = 'yellow';
title2.style.color = 'red';
title2.style.textAlign = 'center';
console.log(title2);

/**
 * Como selectores de CSS
 */

const listContainer = document.querySelector('ul');
// const listContainer = document.querySelector('.menu');
// const listContainer = document.querySelector('#menu');
// const listContainer = document.getElementById('menu');
listContainer.style.border = '5px solid black';
listContainer.style.background = 'red';
listContainer.style.fontStyle = 'italic';
console.log(listContainer);

 console.log('===== Select default first li =====')
 var listItemfirst = document.querySelector('ul li:first-child'); // selecciona el primero
//  var listItem = document.querySelector('li'); // selecciona el primero
listItemfirst.style.fontWeight = 'bold';
listItemfirst.style.fontStyle = 'italic';
   
 console.log('===== Select li (2) =====')
 var listItem2 = document.querySelector('ul li:nth-child(2)');
 listItem2.style.color = 'blue';
 console.log(listItem2);

 console.log('===== Select last li =====')
 var listItemLast = document.querySelector('ul li:last-child');
 listItemLast.style.color = 'white';
 listItemLast.style.border = 'none' 
 console.log(listItemLast);

   

