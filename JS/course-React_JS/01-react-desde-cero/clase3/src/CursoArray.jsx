import React from 'react';
import PropTypes from 'prop-types';

const CursoArray =({title, image, price, cursoLink, profesor_Image, profesorName}) =>(
    <article className="card" id={profesorName}>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">{title}</h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src={profesor_Image} alt={profesorName} />
                        </div>
                    </div>
                    <span className="small">{`Profesor: ${profesorName}`}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href={cursoLink}>{price}</a>
            </div>
        </div>
    </article>
);

CursoArray.propTypes = {
    title           : PropTypes.string,
    image           : PropTypes.string,
    price           : PropTypes.number,
    cursoLink       : PropTypes.string,
    profesor_Image  : PropTypes.string,
    profesorName    : PropTypes.string
};

CursoArray.defaultProps = {
    title           : "No titles",
    image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
    price           : "--",
    cursoLink       : "--",
    profesor_Image  : "https://scott88lee.github.io/FMX/img/avatar.jpg",
    profesorName    : "No Profesorr"
};



export default CursoArray;