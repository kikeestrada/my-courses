


// ========================================================================

class ClsSayHello extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Enrique'
        }
    }

    /**
     * // goodbye (){} esto no funciona por temas
     * de scope y hoiting debemos usa un arrow function
     */
    goodbye = () =>{
        // this.state.name = 'Jose' asi NOOO se hace
        this.setState({
            name:'Jose'
        })
    }
    render(){
        return(
            <h1 onClick={this.goodbye}>Hola {this.state.name}</h1>
        )
    }
}
ReactDOM.render(
    <ClsSayHello hello = 'Hello World'/>,
    document.getElementById('app')
);
