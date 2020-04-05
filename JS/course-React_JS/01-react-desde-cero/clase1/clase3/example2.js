/**
 * Si queremos crear componentes que cambien de
 * estado tenemos que crear clases y no functions
 */

// ========================================================================
class ClsSayHello extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>{this.props.hello}</h1>
        )
    }
}
ReactDOM.render(
    <ClsSayHello hello = 'Hello World using Class and extends'/>,
    document.getElementById('app')
);

