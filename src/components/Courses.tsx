import React from "react";
import Course from "./Course";
import img1 from '../imgs/Vector-1.svg'
import img2 from '../imgs/Vector-2.svg'
import img3 from '../imgs/Vector-3.svg'
import img4 from '../imgs/Vector-4.svg'
import img5 from '../imgs/Vector-5.svg'
import img6 from '../imgs/Vector-6.svg'
import img7 from '../imgs/Vector-7.svg'
import img8 from '../imgs/Vector-8.svg'


interface props{}

const Courses:React.FC<props> = () => {

    const text:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    return(
        <div className="courses">
            <p className="courses__title">By the end of the 4-week course...</p>
            <div className="courses__this">
                <Course img={img1} text={text} />
                <Course img={img2} text={text} />
                <Course img={img3} text={text} />
                <Course img={img4} text={text} />
                <Course img={img5} text={text} />
                <Course img={img6} text={text} />
                <Course img={img7} text={text} />
                <Course img={img8} text={text} />
            </div>
        </div>
    )
}

export default Courses;