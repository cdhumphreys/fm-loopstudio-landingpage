import React from "react";
import Proptypes from "prop-types";

import { FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
const SocialButton = ({ size = "sm", network = "" }) => {
    let iconSize = 12;

    switch (size) {
        case "sm":
            iconSize = 16;
            break;
        case "md":
            iconSize = 32;
            break;
        case "lg":
            iconSize = 48;
            break;
        default:
            break;
    }

    const FACEBOOK = "facebook";
    const TWITTER = "twitter";
    const INSTAGRAM = "instagram";
    const PINTEREST = "pinterest";

    let icon;
    const commonProps = { color: "white", size: iconSize };
    switch (network.toLowerCase()) {
        case FACEBOOK:
            icon = <FaFacebookSquare {...commonProps} />;
            break;
        case TWITTER:
            icon = <FaTwitter {...commonProps} />;
            break;
        case INSTAGRAM:
            icon = <FaInstagram {...commonProps} />;
            break;
        case PINTEREST:
            icon = <FaPinterest {...commonProps} />;
            break;

        default:
            break;
    }

    return (
        <div className="relative group">
            {icon}
            <div className="bg-white opacity-0 absolute left-0.5 right-0.5 -bottom-3 h-1 group-hover:opacity-100 z-10" />
        </div>
    );
};

SocialButton.propTypes = {
    size: Proptypes.oneOf(["sm", "md", "lg"]),
    network: Proptypes.oneOf(["facebook", "twitter", "instagram", "pinterest"]),
};

export default SocialButton;
