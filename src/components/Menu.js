import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="links flex-centered">
            <Link to='/'>Home</Link>
            <Link to='/gallery'>Gallery</Link>
        </div>
    );
}

export default Menu;