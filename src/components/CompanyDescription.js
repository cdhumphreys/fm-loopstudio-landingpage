import React from "react";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";

const CompanyDescription = () => {
    const mobileInteractiveImageSrc = `${process.env.PUBLIC_URL}/images/mobile/image-interactive.jpg`;
    const desktopInteractiveImageSrc = `${process.env.PUBLIC_URL}/images/desktop/image-interactive.jpg`;
    return (
        <section className="bg-white mt-24 mb-20">
            <Container className="flex flex-col jsutify-center items-center">
                <img
                    className="relative"
                    src={mobileInteractiveImageSrc}
                    alt="Interative VR"
                    srcSet={`${desktopInteractiveImageSrc} 768w`}
                />
                <div className="flex flex-col">
                    <div className="pt-8 pb-4">
                        <SectionHeader text="The leader in interactive VR" />
                    </div>
                    <p className="text-gray pb-8 leading-7 tracking-wider text-center">
                        Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of
                        the best companies around the globe. Our award-winning creations have transformed businesses
                        through digital experiences that bind to their brand.
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default CompanyDescription;
