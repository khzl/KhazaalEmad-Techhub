import React from "react";
import "../styles/Footer.css"

function Footer()
{
    return (
        <div className="footer">
            <ul className="menu">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/teams">Teams</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <p>Created With <i className="fa-solid fa-code"></i> By @KhazaalDev</p>
            <p>&copy; 2025 TechHub</p>
        </div>
    );
}

export default Footer;