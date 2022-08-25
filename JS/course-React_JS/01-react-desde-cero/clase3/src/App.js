import React from 'react';
import Banner from './Banner'
import Curso from './Curso'
import CursoProps from './CursoProps'
import CursoPropsKeys from './CursoPropskeys'
import CursoPropsKeysValidation from './CursoPropskeysValidation'
import CursoPropsTypes from "./CursoPropsTypes"
import CursoArray from "./CursoArray"
import './styles/styles.scss';

//Array
const objCursos = [
    {
        title           : "title1",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "50",
        cursoLink       : "https://www.google.com",
        profesor_Image  : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        profesorName    : "Enrique"
    },
    {
        title           : "title2",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "100",
        cursoLink       : "https://www.google.com",
        profesor_Image  : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        profesorName    : "Jose"
    },
    {
        title           : "title3",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "150",
        cursoLink       : "https://www.google.com",
        profesor_Image  : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        profesorName    : "Mauricio"
    },
    {
        title           : "title4",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "200",
        cursoLink       : "https://www.google.com",
        profesor_Image  : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        profesorName    : "Alejandro"
    },
];




//===========================================================================================
//Insertar el banner de EdTeam
const App = ()=> (
    <>
        <Banner />


        <div className="ed-container">
            <div className="ed-item">
                <h1>Curso</h1>
            </div>
        </div>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            <Curso />
            <Curso />
            <Curso />
            <Curso />
        </div>



        <div className="ed-container">
            <div className="ed-item">
                <h1>CursoProps</h1>
            </div>
        </div>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            <CursoProps
                title = "React desde Cero Props"
                image = "http://lorempixel.com/400/200"
                price = "$50"
                cursoLink ="https://www.google.com"
                profesor_Image ="http://lorempixel.com/400/200"
                profesorName = "Enrique"
            />

            <CursoProps
                title = "React desde Cero Props"
                image = "http://lorempixel.com/400/200"
                price = "$100"
                cursoLink ="https://www.google.com"
                profesor_Image ="http://lorempixel.com/400/200"
                profesorName = "Jose"
            />
            <CursoProps
                title = "React desde Cero Props"
                image = "http://lorempixel.com/400/200"
                price = "$50"
                cursoLink ="https://www.google.com"
                profesor_Image ="http://lorempixel.com/400/200"
                profesorName = "Enrique"
            />

            <CursoProps
                title = "React desde Cero Props"
                image = "http://lorempixel.com/400/200"
                price = "$100"
                cursoLink ="https://www.google.com"
                profesor_Image ="http://lorempixel.com/400/200"
                profesorName = "Jose"
            />
        </div>



        <div className="ed-container">
            <div className="ed-item">
                <h1>CursoPropsKeys</h1>
            </div>
        </div>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            <CursoPropsKeys
                title = "React desde Cero CursoPropsKeys"
                image = "http://lorempixel.com/400/200"
                price = "$50"
                cursoLink ="https://www.google.com"
                profesor_Image ="http://lorempixel.com/400/200"
                profesorName = "Enrique"
            />

            <CursoPropsKeys
                title = "React desde Cero CursoPropsKeys"
                image = "http://lorempixel.com/400/200"
                price = "$100"
                cursoLink ="https://www.google.com"
                profesor_Image ="http://lorempixel.com/400/200"
                profesorName = "Jose"
            />

            <CursoPropsKeys
                title = "React desde Cero CursoPropsKeys"
                image = "http://lorempixel.com/400/200"
                price = "$50"
                cursoLink ="https://www.google.com"
                profesor_Image ="http://lorempixel.com/400/200"
                profesorName = "Enrique"
            />

            <CursoPropsKeys
                title = "React desde Cero CursoPropsKeys"
                image = "http://lorempixel.com/400/200"
                price = "$100"
                cursoLink ="https://www.google.com"
                profesor_Image ="http://lorempixel.com/400/200"
                profesorName = "Jose"
            />
        </div>



        <div className="ed-container">
            <div className="ed-item">
                <h1>CursoPropsKeysValidation</h1>
            </div>
        </div>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            <CursoPropsKeysValidation
                title = ""
                image = ""
                price = ""
                cursoLink ="https://www.google.com"
                profesor_Image =""
                profesorName = ""
            />

            <CursoPropsKeysValidation
                title = "React desde Cero CursoPropsKeysValidation"
                image = "http://lorempixel.com/400/200"
                price = "$100"
                cursoLink ="https://www.google.com"
                profesor_Image ="http://lorempixel.com/400/200"
                profesorName = "Jose"
            />

            <CursoPropsKeysValidation
                title = ""
                image = ""
                price = ""
                cursoLink ="https://www.google.com"
                profesor_Image =""
                profesorName = ""
            />

            <CursoPropsKeysValidation
                title = "React desde Cero CursoPropsKeysValidation"
                image = "http://lorempixel.com/400/200"
                price = "$100"
                cursoLink ="https://www.google.com"
                profesor_Image ="http://lorempixel.com/400/200"
                profesorName = "Jose"
            />
        </div>


        <div className="ed-container">
            <div className="ed-item">
                <h1>CursoPropsTypes</h1>
            </div>
        </div>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">

            <CursoPropsTypes
                title           = "React desde Cero CursoPropsTypes"
                image           = "http://lorempixel.com/400/200"
                price           = "$100"
                cursoLink       = "https://www.google.com"
                profesor_Image  = "http://lorempixel.com/400/200"
                profesorName    = "Jose"
            />

            <CursoPropsTypes
                title           = ""
                image           = ""
                price           = ""
                cursoLink       = ""
                profesor_Image  = ""
                profesorName    = ""
            />

            <CursoPropsTypes
                title           = "React desde Cero CursoPropsTypes"
                image           = "http://lorempixel.com/400/200"
                price           = "$100"
                cursoLink       = "https://www.google.com"
                profesor_Image  = "http://lorempixel.com/400/200"
                profesorName    = "Jose"
            />

            <CursoPropsTypes
                title           = ""
                image           = ""
                price           = ""
                cursoLink       = ""
                profesor_Image  = ""
                profesorName    = ""
            />
        </div>


        <div className="ed-container">
            <div className="ed-item">
                <h1>objCursos Arrays</h1>
            </div>
        </div>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            {
                objCursos.map( c => < CursoArray
                    title           = {c.title}
                    image           = {c.image}
                    price           = {c.price}
                    cursoLink       = {c.cursoLink}
                    profesor_Image  = {c.profesor_Image}
                    profesorName    = {c.profesorName}
                />)
            }
        </div>
</>
);

export default App;
