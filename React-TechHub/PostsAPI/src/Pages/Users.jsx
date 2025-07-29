import React from "react";
import { useEffect, useState } from "react";
import api from "../api"

// Function Components
function Users()
{
    const [users,SetUsers] = useState([]);

    useEffect(() =>{
        api.get("/users").then((response) =>
        SetUsers(response.data));
    },[]);

    return(
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) =>(
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default Users;