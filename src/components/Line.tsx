import React from "react";
import cube1 from '../imgs/Cube1.png';
import cube2 from '../imgs/CubeRed.png';


interface Props{}

const Line: React.FC<Props> = () => {

    return(
        <div className="line">
            <img className="questions__cube" src={cube2} alt="" />
            <p className="line__title">What's Included?</p>
            <div className="line__info">
                    <div className="line--data">
                        <p className="line--big">6</p>
                        <p className="line--small">chapters</p>
                    </div>
                    <div className="line--data">
                        <p className="line--big">56+</p>
                        <p className="line--small">Podcast Ideas</p>
                    </div>
                    <div className="line--data">
                        <p className="line--big">28</p>
                        <p className="line--small">Videos</p>
                    </div>
                    <div className="line--data">
                        <p className="line--big">4</p>
                        <p className="line--small">Free Resources</p>
                    </div>
                    <div className="line--data">
                        <p className="line--big">$8k</p>
                        <p className="line--small">Worth of Value</p>
                    </div>
            </div>
            <img className="feedback__cube" src={cube1} alt="" />
        </div>
    )
}

export default Line;