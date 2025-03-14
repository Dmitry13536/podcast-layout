import React from "react";
import Tarifcard from "./Tarifcard";
import Cube from '../imgs/Cube1.png';
import icon1 from '../imgs/books.png';
import icon2 from '../imgs/book.png';

interface Props{}

const Tarif:React.FC<Props> = () => {
    const cost1:number[] = [189, 399];
    const cost2:number[] = [399, 899];

    const data1:string[] = ['24 videos', '1 month free access', 'Helpful templates and resources', 'All course updates for free'];
    const data2:string[] = ['24 videos', '1 month free access', 'Helpful templates and resources', 'All course updates for free', 'Access to all future courses', '1-on-1 help with the tutors', 'Monthly catch-ups']

    return(
        <div className="tarif">
            <p className="tarif__title">It's Time to Start Your Podcast</p>
            <div className="tarif__cards">
                <Tarifcard name="Essential" icon={icon1} data={data1} cost={cost1} />
                <Tarifcard name="Premium" icon={icon2} data={data2} cost={cost2} />
            </div>
            <img className="tarif__cube" src={Cube} alt="cube" />
        </div>
    )
}

export default Tarif;