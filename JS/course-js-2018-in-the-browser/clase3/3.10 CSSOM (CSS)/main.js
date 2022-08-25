const title = document.querySelector('h2');
const description = document.querySelector('p');

/**
 * Si la propiedad de CSS tiene guión como: flex-direction
 * En JS se escribiría con CamelCase : flexDirection
 */

title.style.color = 'red';

/**
 * Match Media
 */


const mediumBp = matchMedia('(min-width : 640px)');
const changeColor = () => {
    if (mediumBp.matches) {
        document.body.style.background = 'red';
    } else {
        document.body.style.background = 'yellow';
    }
};


addEventListener('DOMContentLoaded', changeColor);
addEventListener('resize', changeColor);

/**
 * getComputedStyle
 * devuelve los estilos calculados
 */
console.log(getComputedStyle(title).fontSize);
console.log(getComputedStyle(document.body).position);

/**
 * getBoundingClientRect();
 * nos devuelve el valor exacto de 
 * las caracteristicas de un elemto
 */

 console.log(title.getBoundingClientRect());

 /**
  * Para obtener el tamaño real de una imagen 
  * naturalWidth
  * naturalHeiht 
  */