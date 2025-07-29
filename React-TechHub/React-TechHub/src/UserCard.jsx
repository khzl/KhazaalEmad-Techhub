// Components UserCard 
import React from "react";
import '../src/Usercard.css'

function UserCard( { name , email , age , ImageUrl})
{
    return (
        <div className="user-card">
            {ImageUrl && <img src={ImageUrl} alt={`${name}'s profile`} className="user-image" />}
            <h3>{name}</h3>
            <p>{email}</p>
            {age && <p>Age: {age}</p>}
        </div>
    );
}

export default UserCard;