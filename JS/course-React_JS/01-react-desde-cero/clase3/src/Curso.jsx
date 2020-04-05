import React from 'react';

/**
 * Usaremos expresiones con llaves {}
 * para ver la funcionalidad de JS en nuestra aplicacion
 * */

const curso = {
    title           : "React desde Cero",
    image           : "http://lorempixel.com/400/200",
    price           : "$50",
    cursoLink       : "https://www.google.com",
    profesor_Image  : "http://lorempixel.com/400/200",
    profesorName    : "Enrique"
}


const Curso = ()=>(
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={curso.image} alt={curso.title} />
        </div>

        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center"> {curso.title} </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src={curso.profesor_Image} alt={curso.profesorName} />
                        </div>
                    </div>
                    <span className="small">{`Profesor: ${curso.profesorName}`}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href={curso.cursoLink}>{curso.price}</a>
            </div>
        </div>
    </article>
);

export default Curso;