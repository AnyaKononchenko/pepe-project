import { Link } from "react-router-dom";
import logo from "../logos/pepeNotFound.gif";

const NotFound = () => {
    return ( 
        <section className="not-found flex-centered">
            <img src={logo} alt="logo" />
            <h2>This Pepe is not found...</h2>
            <Link to='/'>Go back home</Link>
        </section>
    );
}
 
export default NotFound;