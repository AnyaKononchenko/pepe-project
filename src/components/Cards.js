import React from "react";
import Card from "./Card";

const Cards = (props) => {
    return (
        <section className="cards">
            {props.content.map((card) => <Card key={card.id} content={card}/>)}
        </section>
    )
}

export default Cards;