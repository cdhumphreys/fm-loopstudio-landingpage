import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Container from "./common/Container";
import Nav from "./Nav";

import theme from "../theme";

const Hero = () => {
    const { width, height } = useWindowDimensions();
    const mediumBreakpoint = theme.breakpoints.md;

    const mobileInteractiveImageSrc = `${process.env.PUBLIC_URL}/images/mobile/image-hero.jpg`;
    const desktopInteractiveImageSrc = `${process.env.PUBLIC_URL}/images/desktop/image-hero.jpg`;

    const bgImageSrc = width > mediumBreakpoint ? desktopInteractiveImageSrc : mobileInteractiveImageSrc;
    return (
        <section className="relative h-screen md:h-auto overflow-hidden">
            <div
                className="absolute h-full w-full z-0 bg-top bg-no-repeat bg-cover"
                style={{ backgroundImage: `url("${bgImageSrc}")` }}
            ></div>
            <Nav />
            <Container className="h-full justify-center items-center md:justify-start">
                <h1 className="relative text-4xl md:text-5xl z-10 text-white border-2 border-white uppercase py-8 px-6 md:pl-6 mb-14 max-w-sm md:max-w-md -mt-40 md:mt-0">
                    Immersive experiences that deliver
                </h1>
            </Container>
        </section>
    );
};

export default Hero;
