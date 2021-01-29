import React from "react";

const Logo = () => {
    return <img src={process.env.PUBLIC_URL + "logo.svg"} className="object-contain" alt="logo" />;
};

export default Logo;
