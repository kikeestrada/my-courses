'use strict';

// ================================================================

var FnUser = function FnUser(props) {
    return React.createElement(
        'div',
        null,
        React.createElement('img', { src: props.img, alt: props.name }),
        React.createElement(
            'p',
            null,
            props.name
        )
    );
};
ReactDOM.render(React.createElement(FnUser, {
    img: 'http://lorempixel.com/100/100',
    name: 'Daniel' }), document.getElementById('app'));
//# sourceMappingURL=example3-dist.js.map