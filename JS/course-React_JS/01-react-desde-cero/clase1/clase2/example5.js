// ================================================================

/**
 * Ejercicio recorriendo un array de elementos
 */

const FnImageElement    = props => <img src={props.user.img} alt={props.name} />;
const FnUserNameElement = props => <p>{props.user.name}</p>;
const FnMethodUser = props =>{
    return (
        <div className='user-item'>
            <FnImageElement user={props.user}/>
            <FnUserNameElement user={props.user}/>
        </div>
    )
};

const objArrayUsers = [
    {
        name: 'Enrique',
        img: 'http://lorempixel.com/100/100'
    },
    {
        name: 'Jose',
        img: 'http://lorempixel.com/100/100'
    },
    {
        name: 'Estrada',
        img: 'http://lorempixel.com/100/100'
    },
    {
        name: 'Nuñez',
        img: 'http://lorempixel.com/100/100'
    }
];

/**
 * Aqui seleccionamos elementos por su indice
 */
// ReactDOM.render(
//     <div>
//         <FnMethodUser user={objArrayUsers[0]} />
//         <FnMethodUser user={objArrayUsers[1]} />
//     </div>  ,
//      document.getElementById('app')
//  );
//



// ================================================================

/**
 * podemos hacer un map creando un componente user- list
 */

const FnUserList = props => {
    const fnUserMapList = props.list.map((user,i) => <FnMethodUser user={user} key={i}/>);
    return (
        <div className='user-list'>
            {fnUserMapList}
        </div>
    );
};

ReactDOM.render(
    <FnUserList list={objArrayUsers} />,
    document.getElementById('app')
);