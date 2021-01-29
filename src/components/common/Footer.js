import React from "react";
import Logo from "./common/Logo";
import SocialButton from "./common/SocialButton";

const Footer = () => {
    return (
        <div>
            <Logo />
            <ul>
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
            <ul>
                <li>
                    <a href="#">
                        <SocialButton network="facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <SocialButton network="twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <SocialButton network="pinterest" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <SocialButton network="instagram" />
                    </a>
                </li>
            </ul>
            © 2021 Loopstudios. All rights reserved.
        </div>
    );
};

export default Footer;
