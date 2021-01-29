import React from "react";

const CreationPreview = ({ src, alt }) => {
    return (
        <div>
            <img src={src} alt={alt} />
            <h2>{alt}</h2>
        </div>
    );
};

export default CreationPreview;
