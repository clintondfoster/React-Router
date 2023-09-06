// import React from "react";
import '../index.css';
import { Link } from "react-router-dom";

function NavBar () {

    return (
        <div>
             <nav id="nav-bar">
                <Link to="/blue">Blue</Link>
                <Link to="/red">Red</Link>
                <Link to="/home">Home</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </div>
    )
}

export default NavBar;
