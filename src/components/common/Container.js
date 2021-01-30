import React from "react";
import Proptypes from "prop-types";

const Container = ({ children, className = "" }) => {
    return <div className={`container mx-auto flex flex-wrap px-8 ${className}`}>{children}</div>;
};

Container.propTypes = {
    children: Proptypes.node,
    className: Proptypes.string,
};
export default Container;
