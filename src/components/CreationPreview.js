import React from "react";
import PropTypes from "prop-types";
const CreationPreview = ({ src, alt }) => {
    return (
        <div className="relative">
            <img src={src} alt={alt} className="object-fit" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20" />
            <div>
                <h2 className="absolute bottom-4 left-4 text-white uppercase text-2xl w-32 whitespace-pre-wrap">
                    {alt}
                </h2>
            </div>
        </div>
    );
};

CreationPreview.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
export default CreationPreview;
