import React from "react";
import PropTypes from "prop-types";

const NavItem = ({ href, text }) => {
    return (
        <li className="px-4 py-2">
            <a className="text-white" href={href}>
                {text}
            </a>
        </li>
    );
};

NavItem.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default NavItem;
