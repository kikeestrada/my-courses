"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),Counter=function(e){function n(e){_classCallCheck(this,n);var t=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.upCount=function(e){e.preventDefault(),t.setState(function(e){return{count:e.count+1}})},t.downCount=function(e){e.preventDefault(),t.setState(function(e){if(1<=e.count)return{count:e.count-1}})},t.resetCount=function(e){e.preventDefault(),t.setState({count:0})},t.state={count:0},t}return _inherits(n,React.Component),_createClass(n,[{key:"render",value:function(){return React.createElement("div",{className:"counter"},React.createElement("div",{className:"count"},this.state.count),React.createElement("div",{className:"changeCount"},React.createElement("a",{href:"#",onClick:this.upCount},"UP "),React.createElement("a",{href:"#",onClick:this.downCount},"Down "),React.createElement("a",{href:"#",onClick:this.resetCount},"Reset ")))}}]),n}();ReactDOM.render(React.createElement(Counter,null),document.getElementById("app"));
//# sourceMappingURL=example5-dist.js.map