import React from "react";
import Logo from "./Logo";

interface Props{}

const Header:React.FC<Props> = ()=>{

    return(
        <div className="header">
            <div className="logo">
                <Logo />
            </div>
            <div className="header__middle">
                <p>LAUNCH A SUCCESSFUL PODCAST</p>
            </div>
            <button className="header__action">Enroll Now</button>
        </div>
    )
}

export default Header;