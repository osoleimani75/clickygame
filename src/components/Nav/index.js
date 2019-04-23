import React from "react";
import "./style.css";

const Nav = props => (
    <nav className="navbar navbar-default" >
        <ul>
            <li className="brand">Clicky Game</li>
            <li>Current Score: {props.score} | Highest Score: {props.highScore}  </li>
            <li className="message"> Click on the images but remember do not click on the same one twice.</li>

        </ul>
    </nav>
);


export default Nav; 