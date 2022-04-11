import React from 'react';
import '../static/css/Login.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { decodeToken } from "react-jwt";

function Login(props) {
    let navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.put(`https://breadit-api.herokuapp.com/login/user/${data['Email']}/pass/${data['Password']}`)
            .then((response) => {
                const userData = decodeToken(response.data.token);
                console.log(decodeToken(response.data.token));
                props.user.setToken(response.data.token);
                props.user.setUsername(userData['username']);
                props.user.setBread(userData['bread']);
                props.user.setLoafs(userData['loafs']);
                console.log(props.user.loafs);
                props.user.logIn();
                props.user.successLogin();
                navigate('/signed');
            })
            .catch((error) => {
                console.log(error);
                props.user.failedLogin();
                navigate('/login');
            })
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>LOGIN</h1>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Email" {...register("Email", { required: true })}></input>
                    <input type="password" placeholder="Password" {...register("Password", { required: true })}></input>
                    <button type="submit">Login</button>
                    {props.user.loginFailed ? <span>Oops! Looks like your password or email were wrong!</span> : <span></span>}
                </form>
            </div>
        </div>
    )
}
export default Login;