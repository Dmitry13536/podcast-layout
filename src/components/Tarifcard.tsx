import React from "react";

interface Props{
    icon:string,
    name:string,
    cost:number[],
    data:string[],
}

const Tarifcard:React.FC<Props> = ({icon,name,data, cost}) => {

    return(
        <div className="card">
            <img className="card__icon" src={icon} alt="" />
            <p className="card__name">{name}</p>
            <p className="card__cost">{`$${cost[0]}`} <span className="card__exp">{`$${cost[1]}`}</span></p>
            <p className="card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="card__button">Get Access Now</button>
            <ul className="card__list">
                {data.map(point => (
                    <li>{point}</li>
                ))}
            </ul>
        </div>
    )
} 

export default Tarifcard;