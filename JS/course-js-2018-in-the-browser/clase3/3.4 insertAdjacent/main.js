const parent = document.getElementById('parent');
const ad = document.createElement('div');
ad.id = 'IdAd';
ad.textContent = 'publicidad';

// parent.insertAdjacentElement('beforebegin', ad);
// parent.insertAdjacentElement('afterend', ad);

// parent.insertAdjacentElement('afterbegin', ad);
// parent.insertAdjacentElement('beforeend', ad);


/**
 * Texto
 */


// parent.insertAdjacentText('beforebegin', 'Hola Mundo');
// parent.insertAdjacentText('afterend', 'Hola Mundo');

// parent.insertAdjacentText('afterbegin', 'Hola Mundo');
// parent.insertAdjacentText('beforeend', 'Hola Mundo');



/**
 * HTML
 */

// parent.insertAdjacentHTML('beforebegin', ` <h3>Hola Mundo</h3>`);
// parent.insertAdjacentHTML('afterend', ` <h3>Hola Mundo</h3>`);

// parent.insertAdjacentHTML('afterbegin', ` <h3>Hola Mundo</h3>`);
// parent.insertAdjacentHTML('beforeend', ` <h3>Hola Mundo</h3>`);
 