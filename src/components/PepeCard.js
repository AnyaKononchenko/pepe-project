import React from "react";
import Card from "../ui/Card"

const PepeCard = (props) => {
    const { content } = props;

    const showChosen = () => {
        alert(`YAY, you are ${content.title}`);
    }

    return (
        <Card onClick={() => {showChosen()} }>
            <img src={content.image} alt="pepe"></img>
            <div className="card__header">{content.title}</div>
            <div className="card__description">{content.description}</div>
        </Card>
    )
    // return (
    //     <article className="card" onClick={() => {showChosen()} }>
    //         <img src={content.image} alt="pepe"></img>
    //         <div className="card__header">{content.title}</div>
    //         <div className="card__description">{content.description}</div>
    //     </article>
    // )
}

export default PepeCard;