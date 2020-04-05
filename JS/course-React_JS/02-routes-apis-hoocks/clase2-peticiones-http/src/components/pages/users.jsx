import React, { Component } from "react"
import UserCard from "../molecules/UserCard"
import axios from "axios"
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
        return(
           <>
               <div className="ed-container">
                   <div className="ed-item">
                       <h1>Users</h1>
                   </div>
               </div>
               <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                   {
                       users.map(u => (
                           <UserCard
                               key         = {u.id}
                               name        = {u.name}
                               username    = {u.username}
                               email       = {u.email}
                           />
                       ))
                   }
               </div>
           </>
        )
   }
}

export default Users