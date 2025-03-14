import React from "react";
import img from '../imgs/quote.svg';
import imgP from '../imgs/IMAGE-3.png';

interface Props{}

const Quote:React.FC<Props> = () =>{

    return(
        <div className="quote">
            <img className="quote__mark" src={img} alt="" />
            <p className="quote__text">At some point you have to say, damn, they shouldn't be giving out all the info I'm learning, it's too much of a shortcut. <span className="quote__text--red">And yet, there is all it, packaged up in an amazing course.</span></p>
            <img className="quote__avatar" src={imgP} alt="" />
            <p>Jamie Matthew</p>
        </div>
    )
}

export default Quote;