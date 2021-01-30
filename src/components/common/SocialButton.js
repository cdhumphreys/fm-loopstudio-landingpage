import React from "react";
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
    const props = { color: "white", size: iconSize };
    switch (network.toLowerCase()) {
        case FACEBOOK:
            icon = <FaFacebookSquare {...props} />;
            break;
        case TWITTER:
            icon = <FaTwitter {...props} />;
            break;
        case INSTAGRAM:
            icon = <FaInstagram {...props} />;
            break;
        case PINTEREST:
            icon = <FaPinterest {...props} />;
            break;

        default:
            break;
    }

    return icon;
};

export default SocialButton;
