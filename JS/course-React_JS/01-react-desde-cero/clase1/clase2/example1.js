/**
 * Aqui veremos propiamente componentes 
 * y estos reciben datos
 * 
 * Los componentes son funciones que reciben datos
 * y retornan elementos de React
 */

const varNameUser = 'Enrique';
const varSayHello = <h1> Hello {varNameUser}</h1>;
ReactDOM.render(
    varSayHello,
    document.getElementById('app')
);

























