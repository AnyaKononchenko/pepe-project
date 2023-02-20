import useFetch from "../hooks/useFetch";
import PepeCard from "./PepeCard";
import Loading from "./Loading";

import load from "../logos/logoForRandom.gif";

const RandomPepe = ({ id }) => {
    const { data: pepe, error, isPending } = useFetch(`https://pepe-db.netlify.app/database.json`);
    return (
        <article className="random-pepe">
            <h2>Universe thinks you are</h2>
            {isPending && <div className="logo-random"><Loading logo={load} title="Calculating.."/></div>}
            {error && <div>{error}</div>}
            {pepe && <PepeCard content={pepe.pepes[id]} />}
        </article>
    );
}

export default RandomPepe;