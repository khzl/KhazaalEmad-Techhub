import { useState } from "react";

function Login({onLogin})
{
    const [username,setUsername] = useState("");

    const handleLogin = () => {
        localStorage.setItem("username",username);
        onLogin(username);
    };

    return (
        <div>
            <h2>Login Page</h2>
            <br />
            <input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username" />
            <br />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;