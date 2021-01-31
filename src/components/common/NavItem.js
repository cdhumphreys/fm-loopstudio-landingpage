import React from "react";
import PropTypes from "prop-types";

const NavItem = ({ href, text, className = "" }) => {
    return (
        <li className={`group relative px-4 py-2 ${className}`}>
            <a className="text-white" href={href}>
                {text}
            </a>
            <div className="bg-white opacity-0 absolute left-1/4 right-1/4 bottom-0 h-0.5 group-hover:opacity-100 z-10" />
        </li>
    );
};

NavItem.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default NavItem;
