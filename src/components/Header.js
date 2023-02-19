import React from "react";
import { Link } from "react-router-dom";
import logo from "../logos/pepeLogo.png";

const Header = () => {
    return (
        <header className="page-header flex-centered">
            <Link to='/'>
                <img src={logo} alt="logo" className="page-logo"/>
            </Link>
            <h1>Which Pepe are you today?</h1>
            <nav className="links flex-centered">
                <Link to='/'>Home</Link>
                <Link to='/gallery'>Gallery</Link>
            </nav>
        </header>
    )
}

export default Header;