
/**
 * Con react JS
 * 
 * Estos aunque son parecidos a los objetos del DOM
 * Son objetos de React porque este usa un Virtual DOM
 */


/**
 * Metodo del DOM
 * document.createElement('h3');
 * 
 * Metodo de React
 * React.createElement('h3');
 */


 const el = React.createElement(
     'h1',
    {
        id:'title3'
    },
    'Hello World created in React.createElement'
 );
 ReactDOM.render(
    el,
    document.getElementById('app')
 );

