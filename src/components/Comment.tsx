import React from "react";
import star from '../imgs/star.png';

interface Props{
    text:string,
    name:string,
    img:string,
}

const Comment : React.FC<Props> = ({text, name, img}) => {
    return(
        <div className="comment">
            <div className="comment__stars">
                <img src={star} alt="star" className="star" />
                <img src={star} alt="star" className="star" />
                <img src={star} alt="star" className="star" />
                <img src={star} alt="star" className="star" />
                <img src={star} alt="star" className="star" />
            </div>
            <p className="comment__text">
                {text}
            </p>
            <div className="comment__name">
                <img src={img} alt="author" />
                <span>{name}</span>
            </div>
        </div>
    )
}

export default Comment;