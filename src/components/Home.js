import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import RandomPepe from "./RandomPepe";

import load from "../logos/loading.gif";

const Home = () => {
    const { data: pepeCards, error, isPending } = useFetch('https://pepe-db.netlify.app/database.json/pepes');
    const [randomPepe, setRandomPepe] = useState(null);

    const handleClick = (e) => {
        const recordsLength = pepeCards.length;
        const guessNumber = getRandomInt(recordsLength);
        setRandomPepe(guessNumber);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    return (
        <section className="home flex-centered">
            {randomPepe && <RandomPepe id={randomPepe}/>}
            {error && <div>Something went wrong :(</div>}
            {isPending && <Loading logo={load}/>}
            {pepeCards && <button className="home__btn" onClick={handleClick}>
                Only true Pepe can click me</button>}
        </section>
    );
}

export default Home;