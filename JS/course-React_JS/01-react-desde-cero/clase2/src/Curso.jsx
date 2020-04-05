import React from 'react'

const Curso = ()=>(
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="http://lorempixel.com/400/200" alt="alt_Card"/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                title Card
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="http://lorempixel.com/400/200" alt="alt_user" />
                        </div>
                    </div>
                    <span className="small">Name User</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://www.google.com">btn User</a>
            </div>
        </div>
    </article>
)

export default Curso;