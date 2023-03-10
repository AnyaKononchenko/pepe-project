import PepeCard from "./PepeCard";

const CardsList = (props) => {
    const cards = props.cards.map((card) => 
        <PepeCard key={card.id} content={card} />
    );

    return (
        <div className="cards">
            { cards }
        </div>
    )
}

export default CardsList;