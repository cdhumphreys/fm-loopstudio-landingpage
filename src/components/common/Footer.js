import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import SocialButton from "./SocialButton";

const Footer = () => {
    return (
        <div className="bg-black">
            <Container className="bg-black">
                <div className="flex flex-col justify-center items-center w-full py-12 md:flex-row md:flex-wrap md:justify-between">
                    <div className="mb-8 md:order-1 md:w-1/2 md:mb-6">
                        <Logo />
                    </div>
                    <ul className="flex flex-col text-white mb-12 gap-4 text-center text-lg md:flex-row md:order-3 md:w-1/2 md:mb-0 md:gap-8">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Events</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                    <ul className="flex flex-row flex-nowrap w-full justify-center items-center gap-4 mb-4 md:order-2 md:w-1/2 md:justify-end md:mb-6">
                        <li>
                            <a href="#">
                                <SocialButton size="md" network="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <SocialButton size="md" network="twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <SocialButton size="md" network="pinterest" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <SocialButton size="md" network="instagram" />
                            </a>
                        </li>
                    </ul>
                    <div className="text-center text-gray md:order-4 md:w-1/2 md:text-right">
                        © 2021 Loopstudios. All rights reserved.
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
