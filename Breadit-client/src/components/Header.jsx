import React from 'react';
import '../static/css/Header.css';
import GenericButton from "./GenericButton";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="headerNav">
            <GenericButton text="Sign Up" name="signup" pathTo="/signup" />
            <GenericButton text="Login" name="login" pathTo="/login" />
            <Link to="/" className="Breadit">Breadit 🍞</Link>
        </div>
    )
}

export default Header;