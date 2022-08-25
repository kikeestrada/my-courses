'use strict';

// ================================================================
/**
 * Nuevo Ejercicio con Componentes
 */

function FnSaludar(props) {
    return React.createElement(
        'h1',
        null,
        ' Hola ',
        props.name
    );
}

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(FnSaludar, { name: 'kike' }),
    React.createElement(FnSaludar, { name: 'Carlos' }),
    React.createElement(FnSaludar, { name: 'Daniel' }),
    React.createElement(FnSaludar, { name: 'Manuel' }),
    React.createElement(FnSaludar, { name: 'Eduardo' }),
    React.createElement(FnSaludar, { name: 'Jose' })
), document.getElementById('app'));
//# sourceMappingURL=example2-dist.js.map