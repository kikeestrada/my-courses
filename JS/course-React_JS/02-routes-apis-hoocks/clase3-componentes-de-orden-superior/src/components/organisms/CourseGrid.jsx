import React from "react"
import CourseCard from "../molecules/CourseCard"


const CourseGrid = ({courses}) =>(
    <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
        {
            courses.length === 0
                ? <h1 className="t3"> ... Loading </h1>
                : courses.map(c => (
                    <CourseCard
                        key             = {c.id             }
                        id              = {c.id             }
                        title           = {c.title          }
                        image           = {c.image          }
                        price           = {c.price          }
                        profesorName    = {c.profesorName   }

                    />
                ))
        }
    </div>
)

export default CourseGrid