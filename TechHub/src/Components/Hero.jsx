import React from "react";
import "../styles/Hero.css"

function Hero()
{
    return (
        <div className="hero">
            <div className="contentHero">
                <h1>Welcome To Tech Hub</h1>
                <p>Your GateWay To Technology Learning</p>
                <a href="/join" className="btnJion">Join Tech Hub</a>
            </div>
        </div>
    );
}

export default Hero;