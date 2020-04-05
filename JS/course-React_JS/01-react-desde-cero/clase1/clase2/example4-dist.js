'use strict';

// ================================================================

/**
 * Estas son las constantes de los elementos
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
var objUserElement = {
    name: 'Enrique',
    img: 'http://lorempixel.com/100/100'
};

ReactDOM.render(React.createElement(FnMethodUser, { user: objUserElement }), document.getElementById('app'));
//# sourceMappingURL=example4-dist.js.map