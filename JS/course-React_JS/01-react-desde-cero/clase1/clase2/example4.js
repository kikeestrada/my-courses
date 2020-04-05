// ================================================================

/**
 * Estas son las constantes de los elementos
 */
const FnImageElement    = props => <img src={props.user.img} alt={props.name} />;
const FnUserNameElement = props => <p>{props.user.name}</p>;
const FnMethodUser      = props =>{
    return (
        <div className='user-item'>
            <FnImageElement user={props.user}/>
            <FnUserNameElement user={props.user}/>
        </div>
    )
};
const objUserElement = {
    name: 'Enrique',
    img: 'http://lorempixel.com/100/100'
};

ReactDOM.render(
   <FnMethodUser user={objUserElement} />,
    document.getElementById('app')
);