import { useState } from "react";
import Menu from "./Menu";

export const BurgerMenu = () => {
    const [display, setDisplay] = useState('hidden');
    const [isClicked, setIsClicked] = useState(false);

    const updateMenu = () => {
        if (!isClicked) {
            setDisplay('visible');
            setIsClicked(true);
        } else {
            setDisplay('slide-out');
            setTimeout(() => setDisplay('hidden'), 500);
            setIsClicked(false);
        }
    }

    return (
        <div className="burger-wrapper">
            <div className="burger-menu flex-centered" onClick={updateMenu}>
                <div className="burger__element"></div>
                <div className="burger__element"></div>
                <div className="burger__element"></div>
            </div>
            <div className={`burger-menu__content ${display}`}>
                <Menu/>
            </div>
        </div>
    );
}

export default BurgerMenu;