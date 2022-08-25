import React, {Fragment} from 'react';
import Curso from './Curso';
import Banner from './Banner';
import './styles/styles.scss';

/*
* Esta seria la primera forma de crear un componente sencillo
* con JSX
* */
// const App = ()=> <div>Hola Mundo desde App.js</div>;

// const App = ()=> (
//     <div>
//         <h2>elemento <em>h1</em> creado en el app.js con JSX y se importará en el index.js</h2>
//     </div>
// );










//=======================================================
/**
 * Restricciones de JSX
 * Solo se exporta un elemento padre con sus hijos
 * no pueden haber dos elementos parent al mismo nivel
 * */

/*
* Con el elemento Fragmant podemos poner dos elementos
* parent al mismo nivel
*
* o en lugar de usar Fragmane usamos una etiqueta vacia
* como contenerdor general
* */

// const App = ()=> (
//     <Fragment>
//         <div>
//             <h2>elemento <em>h1</em> creado en el app.js con JSX y se importará en el index.js</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quis?</p>
//         </div>
//         <div>
//             <h2>elemento <em>h1</em> creado en el app.js con JSX y se importará en el index.js</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quis?</p>
//         </div>
//     </Fragment>
// );


// const App = ()=> (
//     <>
//         <div>
//             <h2>elemento <em>h1</em> creado en el app.js con JSX y se importará en el index.js</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quis?</p>
//         </div>
//         <div>
//             <h2>elemento <em>h1</em> creado en el app.js con JSX y se importará en el index.js</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quis?</p>
//         </div>
//     </>
// );










//===========================================================================================
//Insertar el banner de EdTeam
const App = ()=> (
    <>
        <Banner />
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            <Curso />
            <Curso />
            <Curso />
            <Curso />
        </div>
    </>
);

export default App;

// Reglas JSX
// 1: toda etiqueta se cierra
// 2: Los componentes deben devolver UN solo elemento padre
// 3: Apoyarse de los Fragmnts cuando necesito devolver 2 elementos Padres
// 4: Fragment => <> hijos </>
// 5: img SIEMPRE se cierra con su self closing <img />
// 6: para clases en css se usa la palabra className
// 7: con los atributos html por ejemplo el atrbuto for pasa a ser htmlFor
// 8: No se usa el if, else, while. Se usan otras practicas de programacion