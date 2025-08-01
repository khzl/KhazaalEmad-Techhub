

function LoginStatus({IsLoggedIn})
{
    return(
        <div>
            {IsLoggedIn ? <p>Welcome Back ..!</p> : <p>Please LogIn </p>}
        </div>
    );
}

export default LoginStatus;