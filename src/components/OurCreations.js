import React from "react";
import SectionHeader from "./common/SectionHeader";
import CreationPreview from "./CreationPreview";
import theme from "../theme";

import useWindowDimensions from "../hooks/useWindowDimensions";
import Container from "./common/Container";
import Button from "./common/Button";

const OurCreations = () => {
    const { width, height } = useWindowDimensions();

    const images = [
        { src: "image-deep-earth.jpg", alt: "Deep earth" },
        { src: "image-night-arcade.jpg", alt: "Night arcade" },
        { src: "image-soccer-team.jpg", alt: "Soccer team VR" },
        { src: "image-grid.jpg", alt: "The \ngrid" },
        { src: "image-from-above.jpg", alt: "From up above VR" },
        { src: "image-pocket-borealis.jpg", alt: "Pocket borealis" },
        { src: "image-curiosity.jpg", alt: "The curiosity" },
        { src: "image-fisheye.jpg", alt: "Make it fisheye" },
    ];

    const desktopPath = `${process.env.PUBLIC_URL}/images/desktop/`;
    const mobilePath = `${process.env.PUBLIC_URL}/images/mobile/`;

    const allImages = images.map((img) => ({
        ...img,
        desktopSrc: `${desktopPath}${img.src}`,
        mobileSrc: `${mobilePath}${img.src}`,
    }));

    const mediumBreakpoint = theme.breakpoints.md;
    let useDesktopImages = width > mediumBreakpoint ? true : false;

    return (
        <Container>
            <div className="flex flex-row items-start justify-center md:justify-between w-full">
                <SectionHeader text="Our creations" />
                <Button size="sm" className="hidden md:flex">
                    See all
                </Button>
            </div>

            <div className="flex flex-row flex-wrap justify-center items-center mb-20">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-4 mt-8 mb-10">
                    {allImages.map((image) => {
                        const src = useDesktopImages ? image.desktopSrc : image.mobileSrc;
                        return <CreationPreview key={image.alt} src={src} alt={image.alt} />;
                    })}
                </div>
                <Button size="lg" className="md:hidden mx-auto">
                    See all
                </Button>
            </div>
        </Container>
    );
};

export default OurCreations;
