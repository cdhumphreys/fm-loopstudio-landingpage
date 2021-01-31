import React from "react";
import Proptypes from "prop-types";

const SectionHeader = ({ text, className = "" }) => {
    return <h1 className={`text-center uppercase text-4xl font-thin whitespace-pre-wrap ${className}`}>{text}</h1>;
};

SectionHeader.propTypes = {
    text: Proptypes.string.isRequired,
    className: Proptypes.string,
};

export default SectionHeader;
