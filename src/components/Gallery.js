import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import CardsList from "./CardsList";
import load from "../logos/loading.gif"

const Gallery = () => {
    const { data, error, isPending } = useFetch('https://pepe-db.netlify.app/database.json/pepes')

    return (
        <section className="gallery">
            <h2 className="gallery__header">Meet our Pepe!</h2>
            {error && <div>Something went wrong :(</div>}
            {isPending && <Loading logo={load}/>}
            {data && <CardsList cards={data} />}
        </section>
    );
}
 
export default Gallery;