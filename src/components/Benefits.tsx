import React from "react";
import cube from "../imgs/Cube.png";

interface Props{}

const Benefits: React.FC<Props> = () => {

    return(
        <div className="benefits">
            <p className="benefits__title">The Course Curriculum</p>
            <div className="benefits__this">
                <details>
                    <summary>Outlining your Idea</summary>
                    <p>Answer</p>
                </details>
                <details>
                    <summary>Finding Guests</summary>
                    <p>Answer</p>
                </details>
                <details>
                    <summary>Growing & Connecting</summary>
                    <p>Answer</p>
                </details>
                <details>
                    <summary>Profiting From Your Podcast</summary>
                    <p>Answer</p>
                </details>
                <details>
                    <summary>Building Your Brand</summary>
                    <p>Answer</p>
                </details>
                <details>
                    <summary>Long Term Thinking</summary>
                    <p>Answer</p>
                </details>
            </div>
            <img src={cube} alt="" className="benefits__cube" />
        </div>
    )
}

export default Benefits;