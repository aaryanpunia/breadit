import React from 'react';
import '../static/css/GenericButton.css';
import { useNavigate } from "react-router-dom";

function GenericButton(props) {
    let navigate = useNavigate();
    const pathTo = props.pathTo
    return (
        <button className="GenButton" id={props.name} onClick={() => { navigate(pathTo) }}>{props.text}</button>
    )
}

export default GenericButton;