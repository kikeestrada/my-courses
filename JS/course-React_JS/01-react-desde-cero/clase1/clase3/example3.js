// ========================================================================

class ClsSayHello extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Enrique'
        }
    }
    render(){
        return(
            <h1>Hola {this.state.name}</h1>
        )
    }
}
ReactDOM.render(
    <ClsSayHello hello = 'Hello World'/>,
    document.getElementById('app')
);