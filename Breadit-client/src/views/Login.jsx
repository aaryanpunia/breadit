import React from 'react';
import '../static/css/Login.css';


function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h1>LOGIN</h1>
                <form className="login-form">
                    <input type="text" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;