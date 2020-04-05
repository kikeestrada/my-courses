import React from "react"
import CourseCard from "../molecules/CourseCard"

//Array y aqui le agregamos un id a cada uno
const objCourses = [
    {
        id              : 1,
        title           : "title1",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "50",
        profesorName    : "Enrique"
    },
    {
        id              : 2,
        title           : "title2",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "100",
        profesorName    : "Jose"
    },
    {
        id              : 3,
        title           : "title3",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "150",
        profesorName    : "Mauricio"
    },
    {
        id              : 4,
        title           : "title4",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "200",
        profesorName    : "Alejandro"
    },
];

const CourseGrid = () => (
    <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
        {
            objCourses.map(c => (
                <CourseCard
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

export default CourseGrid