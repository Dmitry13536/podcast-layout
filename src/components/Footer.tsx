import React from "react";
import Logo from "./Logo";

interface Props{}

const Footer: React.FC<Props> = () => {

    return(
        <footer>
            <div className="footer__logo">
                <Logo  />
                <p className="footer__text">The last landing page you'll ever need to launch your next course.</p>
                <p className="footer__info">Built by <a href="#">Nikolai Bain</a>. Powered by <a href="#">Webflow</a>.</p>
            </div>
            <div className="footer__columns">
                <div className="footer__column"> 
                    <p className="footer__column--title">Site</p>
                    <a href="#">Home</a>
                    <a href="#">Contact</a>
                    <a href="#">FAQs</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer__column">
                    <p className="footer__column--title">Admin</p>
                    <a href="#">Style Guide</a>
                    <a href="#">Licenses</a>
                    <a href="#">Instructions</a>
                    <a href="#">Password</a>
                    <a href="#">404</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;