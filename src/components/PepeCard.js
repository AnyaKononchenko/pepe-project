import React from "react";
import Card from "../ui/Card";


const PepeCard = (props) => {
    const { content } = props;

    return (
        <Card>
            <img src={content.image} alt="pepe" ></img>
            <div className="card__header">{content.title}</div>
            <div className="card__description">{content.description}</div>
        </Card>
    )
}

export default PepeCard;