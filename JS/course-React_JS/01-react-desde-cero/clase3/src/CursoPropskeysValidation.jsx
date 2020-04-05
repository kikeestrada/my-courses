import React from 'react';

const CursoPropsKeysValidation = ({title, image, price, cursoLink, profesor_Image, profesorName}) =>(
    <article className="card" id={profesorName}>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            {/*{*/}
                {/*image ?*/}
                {/*<img src={image} alt={title} /> :*/}
                {/*<p className="center">Image Undefined</p>*/}
            {/*}*/}

            <img
                src={image ? image : "https://scott88lee.github.io/FMX/img/avatar.jpg"}
                alt={title ? title : "No hay title"} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center"> {title ? title : "No hay title"} </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img
                                src={profesor_Image ? profesor_Image : "https://scott88lee.github.io/FMX/img/avatar.jpg"}
                                alt={profesorName ? profesorName : "No hay Prof"} />
                        </div>
                    </div>
                    <span className="small">{`Profesor: ${profesorName ? profesorName : " No Prof"}`}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href={cursoLink}>{price ? price : "No Price"}</a>
            </div>
        </div>
    </article>
);

export default CursoPropsKeysValidation;