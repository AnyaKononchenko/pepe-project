import React from "react";
import PepeCard from "./PepeCard";

const Cards = (props) => {
    return (
        <section className="cards">
            {props.content.map((card) => <PepeCard key={card.id} content={card}/>)}
        </section>
    )
}

export default Cards;