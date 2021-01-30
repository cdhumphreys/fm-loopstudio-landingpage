import React from "react";

const Button = ({ children, size = "md", className = "", ...props }) => {
    let padding = "px-8 py-4";

    switch (size) {
        case "sm":
            padding = "px-6 py-1";
            break;
        case "md":
            padding = "px-8 py-1";
            break;
        case "lg":
            padding = "px-10 py-2";
            break;
        default:
            break;
    }
    return (
        <button
            className={` text-black border-2 border-gray-dark ${padding} uppercase tracking-button ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
