import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar (){
    return(
        <nav className="Navbar">
            <ul>
                <li><Link className="link" to="/"> Home </Link></li>
                <li><Link className="link" to="ToDo" > ToDo </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;