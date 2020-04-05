import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

const CourseCard =({id, title, image, price, profesorName}) =>(
    <article className="card" id={profesorName}>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
                <img src={image} alt={title} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">{title}</h3>
            <div className="s-main-center">
                <Link to={`/cursos/${id}`} className="button--ghost-alert button--tiny">
                    go
                </Link>
            </div>
        </div>
    </article>
);

CourseCard.propTypes = {
    title           : PropTypes.string,
    image           : PropTypes.string,
    price           : PropTypes.number,
    profesorName    : PropTypes.string
};

CourseCard.defaultProps = {
    title           : "No titles",
    image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
    price           : "--",
    profesorName    : "No Profesorr"
};



export default CourseCard;