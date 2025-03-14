import React from "react";
import img from '../imgs/img2.png';

interface Props{}

const Next: React.FC<Props> = ()=> {

    return(
        <div className="next">
            <img src={img} alt="" />
            <div className="next__info">
                <p className="next--title">Learn with Joyce and Rob, your podcast teachers</p>
                <p className="next--info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default Next;