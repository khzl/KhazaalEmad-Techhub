import React from "react";
import UserCard from "./UserCard";

const Users = [
    {name: "Khazaal" , email: "Khazaal@gmail.com" , age: 24 , ImageUrl:"https://placehold.co/600x400/png"},
    {name: "Ali" , email: "Ali@gmail.com" , age: 24 , ImageUrl:"https://placehold.co/600x400/png"},
    {name: "Yaser", email: "Yaser@gmail.com" , age: 24 , ImageUrl:"https://placehold.co/600x400/png"}
  ];


// Function Component
function UserLists()
{
    return(
        <div className="user-container">
            {Users.map((user,index) => (
                <UserCard
                key={index}
                name={user.name}
                email={user.email}
                age={user.age}
                ImageUrl={user.ImageUrl}
                />
            ))}
        </div>
    );
}

export default UserLists;