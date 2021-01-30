import React from "react";
import Logo from "./common/Logo.js";
import NavItem from "./common/NavItem.js";

const Nav = () => {
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
        </nav>
    );
};

export default Nav;
