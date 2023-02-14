import React from "react";

const Card = (props) => {
    const { content } = props;

    const showChosen = () => {
        alert(`YAY, you are ${content.title}`);
    }

    return (
        <article className="card" onClick={() => {showChosen()} }>
            <img src={content.image} alt="pepe"></img>
            <div className="card__header">{content.title}</div>
            <div className="card__description">{content.description}</div>
        </article>
    )
}

export default Card;