import React from 'react';
import Button from "../components/Button.jsx";

const Login = () => {

    const login = () => {
        alert("Login");
    }

    return (
        <div className="login-page">
            <h1>Login</h1>
            <Button label="Log In" onClick={login} />
        </div>
    );
};

export default Login;