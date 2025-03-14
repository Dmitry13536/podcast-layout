import React from "react";
import Comment from "./Comment";
import Cube from '../imgs/Cube.png';
import img1 from '../imgs/IMAGE-1.png';
import img2 from '../imgs/IMAGE-2.png';
import img3 from '../imgs/IMAGE-3.png';
import img4 from '../imgs/IMAGE-4.png';
import img5 from '../imgs/IMAGE-5.png';



interface Props{}

const Feedback: React.FC<Props> = () =>{

    const text1:string = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ad vitae, magnam natus exercitationem est repellendus eos voluptatum ipsum, ut fugit doloremque, quam laboriosam dicta facere tempore eveniet. Hic esse ad vero laborum quis alias sunt asperiores tenetur porro quas.';
    const text2:string = 'Lorem ipsum dolor sit, magnam natus exercitationem est repellendus eos voluptatum ipsum, ut fugit doloremque, quam laboriosam dicta facere tempore eveniet. Hic esse ad vero laborum quis alias sunt asperiores tenetur porro quas.';
    const text3:string = 'Lorem ipsum dolor sit, repellendus eos voluptatum ipsum, ut fugit doloremque, quam laboriosam dicta facere tempore eveniet. Hic esse ad vero laborum quis alias sunt asperiores tenetur porro quas.';
    const text4:string = 'Lorem ipsum dolor sit, quam laboriosam dicta facere tempore eveniet. Hic esse ad vero laborum quis alias sunt asperiores tenetur porro quas.';


    return(
        <div className="feedback">
            <p className="feedback__title">More Praise From our Students</p>
            <div className="feedback__main">
                <div className="feedback__column">
                    <Comment name="Jamie Matthew" text={text1} img={img1} />
                    <Comment name="Jamie Matthew" text={text2} img={img2} />                    
                </div>
                <div className="feedback__column">
                    <Comment name="Jamie Matthew" text={text1} img={img3} />
                    <Comment name="Jamie Matthew" text={text4} img={img4} />
                </div>
                <div className="feedback__column">
                    <Comment name="Jamie Matthew" text={text2} img={img5} />
                    <Comment name="Jamie Matthew" text={text3} img={img1} />
                </div>
            </div>
            <img className="feedback__cube" src={Cube} alt="" />
        </div>
    )
}

export default Feedback;