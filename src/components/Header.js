import { Link } from "react-router-dom";
import logo from "../logos/pepeLogo.png";
import Menu from "./Menu";
import BurgerMenu from "./BurgerMenu";

const Header = ({changeWidth}) => {

    return (
        <header className="page-header flex-centered">
            <Link to='/' className="flex-centered">
                <img src={logo} alt="logo" className="page-logo" />
                <h1>Which Pepe are you today?</h1>
            </Link>
            <nav className="nav flex-centered">
                {changeWidth > 900 && <Menu />}
                {changeWidth <= 900 && <BurgerMenu />}
            </nav>
        </header>
    )
}

export default Header;