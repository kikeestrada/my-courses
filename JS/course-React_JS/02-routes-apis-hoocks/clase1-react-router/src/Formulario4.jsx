import React, {Component} from 'react';

class Formulario4 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            nombre  : '',
            correo  : '',
            fecha   : new Date()
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha  = this.cambiarFecha.bind(this)
    }
    cambiarNombre(e){
        this.setState({
            nombre : e.target.value
        })
    }
    cambiarCorreo(e){
        this.setState({
            correo : e.target.value
        })
    }
    cambiarFecha(){
        this.setState({
            fecha : new Date()
        })
    }
    render(){
        return(
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h2>Fecha actual: {Math.ceil(this.state.fecha/1000)}</h2>
                <form id='elementoFormulario'>
                    <div className="ed-grid s-grid-2">
                        <div className="form__item">
                            <label>Nombre: </label>
                            <input type="text" onChange = { this.cambiarNombre }/>                        
                        </div>
                        <div className="form__item">
                            <label>Nombre: </label>
                            <input type="email" onChange ={ this.cambiarCorreo }/>   
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    };
    componentDidMount(){
        /**
         * aqui manipulamos el dom con la seguridad de  
         * que los elementos ya fueron cargados en el DOM
         */
        let elementoFormulario = document.getElementById('elementoFormulario');
        console.log(elementoFormulario)



        /**
         * aqui ponemos un setInterval para la fecha
         */
        this.intervaloFecha = setInterval(() => {
            this.cambiarFecha()
            console.log(new Date())
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState){
        /**
         * como es una actualizacion podemos acceder a la informacion 
         * y al estado del componente antes
         * de actualizarce con dos propiedades
         * prevProps y prevState
         */
        console.log('prevProps:');
        console.log(prevProps);
        console.log('----------')
        console.log('prevState: ');
        console.log(prevState);
        console.log('----------')
    }

    componentWillUnmount(){
        clearInterval(this.intervaloFecha)
    }

}
export default Formulario4