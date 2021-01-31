import React, { useState } from "react";
import Logo from "./common/Logo.js";
import NavItem from "./common/NavItem.js";
import { FaBars, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const Nav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const navItems = [
        { href: "#", text: "About" },
        { href: "#", text: "Careers" },
        { href: "#", text: "Events" },
        { href: "#", text: "Products" },
        { href: "#", text: "Support" },
    ];
    return (
        <nav className="relative flex flex-row items-center justify-between top-0 w-full px-8 py-8 container mx-auto md:mb-20">
            <Logo />
            <ul className="hidden md:flex flex-row justify-center flex-nowrap items-center -mr-4">
                {navItems.map((item) => (
                    <NavItem key={item.text} href={item.href} text={item.text} />
                ))}
            </ul>
            <div onClick={() => setMenuIsOpen(true)} className="md:hidden">
                <FaBars color="white" size={24} />
            </div>
            <div
                className={`fixed top-0 left-0 right-0 bottom-0 bg-black p-8 z-20 opacity-100 transition-opacity ${
                    !menuIsOpen && "invisible opacity-0"
                }`}
            >
                <div onClick={() => setMenuIsOpen(false)} className="w-full flex flex-row items-center justify-between">
                    <Logo />
                    <FaTimes color="white" size={30} />
                </div>
                <ul className="h-full flex flex-col justify-center items-start gap-3">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.text}
                            href={item.href}
                            text={item.text}
                            className="text-3xl font-heading uppercase font-light tracking-widest"
                        />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

// Nav.propTypes = {
//     openMobileMenu: PropTypes.func.isRequired,
// };
export default Nav;
