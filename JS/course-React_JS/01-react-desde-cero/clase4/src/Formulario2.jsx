import React, {Component} from 'react';

class Formulario2 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            nombre : 'Enrique',
            correo : 'kikeestrada@gmail.com'
        }
    }
    render(){
        return(
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="form__item">
                        <label>Nombre: </label>
                        <input type="text"/>                        
                    </div>
                    <div className="form__item">
                        <label>Nombre: </label>
                        <input type="email"/>                        
                    </div>
                    <div className="form__item">
                        <label>Enviar: </label>
                        <input className="button full" type="submit"/>                        
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    };
}
export default Formulario2