import React from "react";
import Proptypes from "prop-types";

const SectionHeader = ({ text }) => {
    return <h1 className="text-center uppercase text-4xl font-thin">{text}</h1>;
};

SectionHeader.propTypes = {
    text: Proptypes.string.isRequired,
};

export default SectionHeader;
