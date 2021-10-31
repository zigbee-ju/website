import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <Link to="/" class="logo">
                Logo
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Team</Link>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
