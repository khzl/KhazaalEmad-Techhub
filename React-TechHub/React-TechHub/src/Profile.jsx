import UserContext from "./UserContext";
import { useContext } from "react";

// Function Component
function Profile()
{
    const user = useContext(UserContext);

    return(
        <div>
            <h2>User Info</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Profile;