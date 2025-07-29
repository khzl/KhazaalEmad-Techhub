import React from "react";
import "../styles/Navbar.css";

function Navbar(){
    return(
    <nav className="navbar">
        <div className="navdiv">
            <div className="logo">
                <a href="/">TechHub</a>
            </div>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/learning">Learning</a></li>
                <button><a href="/signin">Sign In</a></button>
                <button><a href="signup">Sign Up</a></button>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;