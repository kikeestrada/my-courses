import React from "react"
import UserCard from "../molecules/UserCard"
import withLoader from "../HOC/withLoader";


const UsersGrid = ({users}) =>(
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

export default withLoader("users") (UsersGrid)