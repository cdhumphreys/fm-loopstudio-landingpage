import React from "react";
import CreationPreview from "./CreationPreview";

const OurCreations = () => {
    const creations = [
        { src: "", alt: "Deep earth" },
        { src: "", alt: "Night arcade" },
        { src: "", alt: "Soccer team VR" },
        { src: "", alt: "The grid" },
        { src: "", alt: "From up above VR" },
        { src: "", alt: "Pocket borealis" },
        { src: "", alt: "The curiosity" },
        { src: "", alt: "Make it fisheye" },
    ];

    return (
        <div>
            <h1>Our creations</h1>
            <button type="button">
                <a href="#">See all</a>
            </button>
            <div></div>
            {creations.map((creation) => (
                <CreationPreview src={creation.src} alt={creation.alt} />
            ))}
        </div>
    );
};

export default OurCreations;
