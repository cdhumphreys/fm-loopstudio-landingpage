import React from "react";
import PropTypes from "prop-types";
const CreationPreview = ({ src, alt }) => {
    return (
        <div className="relative group cursor-pointer">
            <img src={src} alt={alt} className="object-cover w-full object-center" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20" />
            <div className="bg-white opacity-0 absolute left-0 right-0 top-0 bottom-0 group-hover:opacity-50"></div>
            <div>
                <h2 className="absolute bottom-4 left-4 text-white uppercase text-2xl w-32 whitespace-pre-wrap group-hover:text-black">
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
