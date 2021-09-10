import React from "react";
import { Container } from "../../general";
import "./navBar.scss";

function NavBar({ menuOpen, setMenuOpen }) {
  return (
    <header className={"navBar" + menuOpen && "navBar--active"}>
      <Container>
        <div className="navBar__inner">
          <div className="navBar__left">
            <a href="#home" className="navBar__logo"></a>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default NavBar;
