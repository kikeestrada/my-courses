/**
 * Reloj con Vanilla JS
 */

 const app = document.getElementById('app');
 // function reloj (){
 //     app.textContent = new Date().toLocaleTimeString();
 // }
function reloj (){
    let now = new Date().toLocaleTimeString();
    const el = <span>{now}</span>
    ReactDOM.render(el,document.getElementById('app'));
}
setInterval(reloj, 1000);