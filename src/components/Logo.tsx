import React from "react";
import img1 from '../imgs/triange.svg';
import img2 from '../imgs/triange-1.svg';

interface Props{
}

const Logo:React.FC<Props> = () => {

    return(
        <div className="logo">
            <div className="logo__parts">
                <img className="logo__part1" src={img2} alt="" />
                <img className="logo__part2" src={img1} alt="" />
            </div>
            <span className="logo__text">Coursely</span>
        </div>
    )
}

export default Logo;