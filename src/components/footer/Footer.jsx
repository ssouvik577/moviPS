import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const footerNavigationHandler = (type) => {
        if (type === "terms") {
          navigate("/terms-use");
        } else if (type === "privacy") {
            navigate("/privacy-policy")
        } else if (type === "home") {
            navigate("/")
        } else if (type === "about") {
            navigate("/about")
        }
      }

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem" onClick={() => footerNavigationHandler("terms")}>Terms Of Use</li>
                    <li className="menuItem" onClick={() => footerNavigationHandler("privacy")}>Privacy-Policy</li>
                    <li className="menuItem" onClick={() => footerNavigationHandler("about")}>About</li>
                    {/* <li className="menuItem">Contact US</li> */}
                </ul>
                <div className="infoText">
                Explore the world of cinema with MoviPS, your ultimate destination for all things movies. With a seamless user experience powered by ReactJS, I bring you the latest in film news, reviews, and trailers. Dive into our extensive collection of curated movie recommendations, browse through our diverse genres, and discover hidden cinematic gems. Start your movie journey today with MoviPS.
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/souvik.sinha.9404" target="_blank">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    </a>
                    <a href="https://twitter.com/?lang=en" target="_blank">
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    </a>
                    <a href="https://www.linkedin.com/in/souvik-singha-5a1a78282/" target="_blank">
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    </a>
                    <a href="https://github.com/ssouvik577?tab=repositories" target="_blank">
                    <span className="icon">
                        <FaGithub />
                    </span>
                    </a>
                </div>
                <div className="copyWrite">
                    <p>&copy; 2024 <span onClick={() => footerNavigationHandler("home")} className="cursor">MoviPS</span>. All rights reserved.</p>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;