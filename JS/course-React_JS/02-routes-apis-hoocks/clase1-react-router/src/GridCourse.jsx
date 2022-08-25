import React from "react"
import CardCourse from "./CardCourse"

//Array y aqui le agregamos un id a cada uno
const objCursos = [
    {
        id              : 1,
        title           : "title1",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "50",
        cursoLink       : "https://www.google.com",
        profesor_Image  : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        profesorName    : "Enrique"
    },
    {
        id              : 2,
        title           : "title2",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "100",
        cursoLink       : "https://www.google.com",
        profesor_Image  : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        profesorName    : "Jose"
    },
    {
        id              : 3,
        title           : "title3",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "150",
        cursoLink       : "https://www.google.com",
        profesor_Image  : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        profesorName    : "Mauricio"
    },
    {
        id              : 4,
        title           : "title4",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "200",
        cursoLink       : "https://www.google.com",
        profesor_Image  : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        profesorName    : "Alejandro"
    },
];

const GridCourse = () => (
    <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
        {
            objCursos.map(c => (
                <CardCourse
                    key             = {c.id             }
                    id              = {c.id             }
                    title           = {c.title          }
                    image           = {c.image          }
                    price           = {c.price          }
                    cursoLink       = {c.cursoLink      }
                    profesor_Image  = {c.profesor_Image }
                    profesorName    = {c.profesorName   }

                />
            ))
        }
    </div>
);

export default GridCourse