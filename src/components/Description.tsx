import React from "react";
import img1 from '../imgs/Vector-3.svg';
import img2 from '../imgs/Vector-5.svg';
import img3 from '../imgs/Vector-8.svg';

interface Props{}

const Description: React.FC<Props> = ()=> {

    return(
        <div className="description">
            <div className="description__column">
                <img src={img1} alt="" />
                <p className="column__title">Learn what the best gear is and where to get it</p>
                <p className="column__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="description__column">
                <img src={img2} alt="" />
                <p className="column__title">How to find guests for your episodes</p>
                <p className="column__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore magna aliqua.</p>
            </div>
            <div className="description__column">
                <img src={img3} alt="" />
                <p className="column__title">And how to finally make some money</p>
                <p className="column__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default Description;