/**
 * Los estados son parecidos a las propiedades de los componentes
 * Las propiedades son datos que son pasados a ese component
 * una url es un propiedad y son inmutables y no pueden cambiar
 */

/**
 * Los estados son variables pero ademas
 * son completamente encapsulados al componente que le corresponde
 * no son conocidos por componentes externos
 */




/**
 * Recordamos como crear un componente sin estado ó stateless
 */
const FnSayHello = props =>{
    "use strict";
    return(
        <h1>{props.hello}</h1>
    )
};

ReactDOM.render(
    <FnSayHello hello = 'Hello World using a function props'/>,
    document.getElementById('app')
);





















