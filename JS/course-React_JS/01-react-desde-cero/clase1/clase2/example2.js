
// ================================================================
/**
 * Nuevo Ejercicio con Componentes
 */

function FnSaludar(props){
    return <h1> Hola {props.name}</h1>;
}

ReactDOM.render(
    <div>
        <FnSaludar name='kike'/>
        <FnSaludar name='Carlos'/>
        <FnSaludar name='Daniel'/>
        <FnSaludar name='Manuel'/>
        <FnSaludar name='Eduardo'/>
        <FnSaludar name='Jose'/>
    </div>,
    document.getElementById('app')
);
