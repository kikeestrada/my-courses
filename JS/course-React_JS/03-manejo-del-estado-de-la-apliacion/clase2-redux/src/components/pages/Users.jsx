import React, { Component } from "react"
import axios from "axios"
import UsersGrid from "../organisms/UsersGrid";
class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }
    // componentDidMount(){
    //     // fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(response2 => {
    //             this.setState({
    //                 users:response2
    //             })
    //         })
    // }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            // .then(resp => console.log(resp.data))
            .then(resp =>{
                this.setState({
                    users: resp.data
                })
            })
    }
   render(){
        const { users } = this.state;
        return <UsersGrid users={users} />
   }
}

export default Users