import React from "react";
import cube from '../imgs/CubeRed.png'

interface Props{}

const Questions:React.FC<Props> = () => {
    return(
        <div className="questions">
            <img className="questions__cube" src={cube} alt="" />
            <p className="questions__title">Any Questions?</p>
            <div className="questions__this">
                <details>
                    <summary>How long is the course?</summary>
                    <p>Answer</p>
                </details>
                <details>
                    <summary>When does the next intake start?</summary>
                    <p>Answer</p>
                </details>
                <details>
                    <summary>I'm not sure if this course is suitable for me?</summary>
                    <p>Answer</p>
                </details>
                <details>
                    <summary>How long do I have to complete the course?</summary>
                    <p>Answer</p>
                </details>
            </div>
        </div>
    )
}

export default Questions;