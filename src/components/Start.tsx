import React from "react";
import img from '../imgs/img1.png';

interface Props{}

const Start: React.FC<Props> = ()=> {

    return(
        <div className="start">
            <div className="start__info">
                <p className="start__title">Learn How To Launch a Successful Podcast</p>
                <p className="start__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="start__cost">$189 <span className="start--small">$399</span></p>
                <div className="start__buttons">
                    <button className="header__action startbutton">Enroll Now</button>
                    <button className="start--grey startbutton">Watch Trailer</button>
                </div>
            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default Start;