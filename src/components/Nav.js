import React from "react";
import Logo from "./common/Logo";

const Nav = () => {
    return (
        <nav className="flex flex-row justify-between items-center">
            <Logo />
            <ul className="flex-flex-row justify-center items-center">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
