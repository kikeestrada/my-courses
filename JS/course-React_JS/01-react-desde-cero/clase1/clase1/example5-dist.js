'use strict';

/**
 * Reloj con Vanilla JS
 */

var app = document.getElementById('app');
// function reloj (){
//     app.textContent = new Date().toLocaleTimeString();
// }
function reloj() {
  var now = new Date().toLocaleTimeString();
  var el = React.createElement(
    'span',
    null,
    now
  );
  ReactDOM.render(el, document.getElementById('app'));
}
setInterval(reloj, 1000);