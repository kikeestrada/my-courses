
 const el = React.createElement(
     'h1',
     {
        id:'title4',
        className: 'myClass'},
        'Hello ',
        React.createElement(
            'span',
            null,
            'World created with React.createElement'
        )
     );
 ReactDOM.render(
     el,
     document.getElementById('app')
 );