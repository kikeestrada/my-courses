// ================================================================

const FnUser = (props) =>{
    return (
        <div>
            <img src={props.img} alt={props.name} />
            <p>{props.name}</p>
        </div>
    )
};
ReactDOM.render(
   <FnUser
       img ='http://lorempixel.com/100/100'
       name='Daniel' />,
    document.getElementById('app')
);

