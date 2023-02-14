import React from "react";

const Header = (props) => {
    return (
        <header className="page-header flex-centered"><h1>{props.content}</h1></header>
    )
}

export default Header;