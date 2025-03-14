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
                    <a href="https://dmitry13536.github.io/podcast-layout/">Home</a>
                    <a href="https://dmitry13536.github.io/podcast-layout/">Contact</a>
                    <a href="https://dmitry13536.github.io/podcast-layout/">FAQs</a>
                    <a href="https://dmitry13536.github.io/podcast-layout/">Terms & Conditions</a>
                    <a href="https://dmitry13536.github.io/podcast-layout/">Privacy Policy</a>
                </div>
                <div className="footer__column">
                    <p className="footer__column--title">Admin</p>
                    <a href="https://dmitry13536.github.io/podcast-layout/">Style Guide</a>
                    <a href="https://dmitry13536.github.io/podcast-layout/">Licenses</a>
                    <a href="https://dmitry13536.github.io/podcast-layout/">Instructions</a>
                    <a href="https://dmitry13536.github.io/podcast-layout/">Password</a>
                    <a href="https://dmitry13536.github.io/podcast-layout/">404</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;