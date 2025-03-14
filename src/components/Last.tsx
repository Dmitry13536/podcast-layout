import React from "react";
import img from '../imgs/img1.png';

interface Props{}

const Last: React.FC<Props> = ()=> {

    return(
        <div className="next">
            <div className="next__info">
                <p className="next--title">Get the editing skills you need to thrive</p>
                <p className="next--info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default Last;