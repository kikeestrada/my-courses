import React from "react"

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

const CourseMatch = ({match}) => {
    const currentCourse = objCourses.filter(c => c.id === parseInt(match.params.id))[0];

    return(
        <div className="ed-grid m-grid-3">
            {
                // existe el curso?
                currentCourse ? (
                     <>
                         {/*<h1 className="m-cols-3">{match.params.id}</h1>*/}
                         <h1 className="m-cols-3">{currentCourse.title}</h1>
                         <img className="m-cols-1" src={currentCourse.image} alt={currentCourse.title}/>
                         <p className="m-cols-2">Profesor: {currentCourse.profesorName}</p>
                     </>

                ) : (
                    <div className="ed-grid">
                        <h1>El curso no existe</h1>
                    </div>
                )
            }
        </div>
    )
};

export default CourseMatch