'use strict';

// ================================================================

/**
 * Ejercicio recorriendo un array de elementos
 */

var FnImageElement = function FnImageElement(props) {
    return React.createElement('img', { src: props.user.img, alt: props.name });
};
var FnUserNameElement = function FnUserNameElement(props) {
    return React.createElement(
        'p',
        null,
        props.user.name
    );
};
var FnMethodUser = function FnMethodUser(props) {
    return React.createElement(
        'div',
        { className: 'user-item' },
        React.createElement(FnImageElement, { user: props.user }),
        React.createElement(FnUserNameElement, { user: props.user })
    );
};

var objArrayUsers = [{
    name: 'Enrique',
    img: 'http://lorempixel.com/100/100'
}, {
    name: 'Jose',
    img: 'http://lorempixel.com/100/100'
}, {
    name: 'Estrada',
    img: 'http://lorempixel.com/100/100'
}, {
    name: 'Nuñez',
    img: 'http://lorempixel.com/100/100'
}];

/**
 * Aqui seleccionamos elementos por su indice
 */
// ReactDOM.render(
//     <div>
//         <FnMethodUser user={objArrayUsers[0]} />
//         <FnMethodUser user={objArrayUsers[1]} />
//     </div>  ,
//      document.getElementById('app')
//  );
//


// ================================================================

/**
 * podemos hacer un map creando un componente user- list
 */

var FnUserList = function FnUserList(props) {
    var fnUserMapList = props.list.map(function (user, i) {
        return React.createElement(FnMethodUser, { user: user, key: i });
    });
    return React.createElement(
        'div',
        { className: 'user-list' },
        fnUserMapList
    );
};

ReactDOM.render(React.createElement(FnUserList, { list: objArrayUsers }), document.getElementById('app'));
//# sourceMappingURL=example5-dist.js.map