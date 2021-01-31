import React from "react";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";

const CompanyDescription = () => {
    const mobileInteractiveImageSrc = `${process.env.PUBLIC_URL}/images/mobile/image-interactive.jpg`;
    const desktopInteractiveImageSrc = `${process.env.PUBLIC_URL}/images/desktop/image-interactive.jpg`;
    return (
        <section className="bg-white mt-24 mb-20">
            <Container className="flex flex-col jsutify-center items-center md:flex-row md:flex-nowrap">
                <img
                    className="relative md:w-2/3 z-0"
                    src={mobileInteractiveImageSrc}
                    alt="Interative VR"
                    srcSet={`${desktopInteractiveImageSrc} 768w`}
                />
                <div className="bg-white flex flex-col md:absolute md:bottom-0 md:items-center md:justify-center md:p-20 md:right-0 md:w-1/2 md:max-h-full z-10">
                    <div className="pt-6 pb-4 md:pt-0">
                        <SectionHeader text={"The leader in\ninteractive VR"} className="md:text-left" />
                    </div>
                    <p className="text-sm text-gray leading-7 tracking-wider text-center md:text-left">
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
