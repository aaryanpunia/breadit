import React from 'react';
import '../static/css/Signup.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup(props) {
    let navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios.put(`https://breadit-api.herokuapp.com/signup/user/${data['Email']}/pass/${data['Password']}`)
            .then(function (response) {
                navigate('/login');
            })
            .catch(function (error) {
                console.log(error);
                navigate('/signupfailed');
            })
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>SIGNUP</h1>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}></input>
                    {errors.Email && <span>Oops! That Email doesn't look right :(</span>}
                    <input type="password" placeholder="Password" {...register("Password", { required: true, minLength: 8, pattern: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/ })}></input>
                    {errors.Password && <span className="pass-err">at least 8 letters, one uppercase, one lowercase letter, and one special character</span>}
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;