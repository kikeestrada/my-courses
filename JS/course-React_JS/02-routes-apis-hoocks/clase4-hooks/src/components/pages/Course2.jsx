import React, { useState, useEffect } from "react"
import axios from "axios"

const Course = ({match}) => {
    const [stateCourse, setStateCourse] = useState({});
    const [comment, setComment] = useState("Sin Comentarios");
    useEffect(  ()=> {
        console.log("hola");
        axios.get(`http://my-json-server.typicode.com/kikeestrada/json-db/courses/${match.params.id}`)
            .then(resp => setStateCourse(resp.data));
            }, []);

    const myComment = e =>{
        setComment(e.target.value)
    };
    return(
        <div className="ed-grid m-grid-4">
            {
                stateCourse ? (
                     <>
                         <div className="l-block">
                             <h1 className="m-cols-3">{stateCourse.title}</h1>
                             <img className="m-cols-1" src={stateCourse.image} alt={stateCourse.title}/>
                             <p className="m-cols-2">Profesor: {stateCourse.profesorName}</p>
                         </div>
                        <div className="m-cols-4">
                            <h2>Escribe tu comentario</h2>
                            <input type="text" placeholder="Escribe ..." onChange={myComment.bind(this)}/>
                            <p>{comment}</p>
                        </div>
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

export default Course