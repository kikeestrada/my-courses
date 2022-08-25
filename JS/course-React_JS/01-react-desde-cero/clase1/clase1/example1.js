/**
 * esto esta bien y funciona pero lo que pasamos es solo un string
 * y esto es un mal uso
 */
document.getElementById('app').innerHTML = 
'<h1 id="title"> h1 creado desde un innerHTML</h1>';

/**
 * Con Vanilla JS
 */

 /**
  * id = title1
  */
const title1 = document.createElement('h3');
// el.id ='title';
title1.setAttribute('id', 'title');
title1.textContent = ' h1 created with createElement()';
document.getElementById('app').appendChild(title1);


/**
 * id = title2
 */
const title2 = document.createElement('h3');
const child = document.createElement('span');
// el.id ='title';
title2.setAttribute('id', 'title')
title2.textContent = ' h1 #2 created with';
child.textContent = ' createElement()';
title2.appendChild(child);
document.getElementById('app').appendChild(title2);