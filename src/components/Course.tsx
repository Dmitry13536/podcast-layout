import React from "react";

interface props{
    img:string,
    text:string,
}

const Course:React.FC<props> = ({img, text}) => {
    return(
        <div className="course">
            <img src={img} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default Course;