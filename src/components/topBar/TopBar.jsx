import React from "react";
import { Container } from "../../general";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import ChatIcon from "@material-ui/icons/Chat";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import "./topBar.scss";

function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <header className={"topBar" + menuOpen && "topBar--active"}>
      <Container>
        <div className="topBar__inner">
          <a href="#home" className="topBar__logo">
            Nurbolot
          </a>
          <div className="topBar__contact">
            <PhoneEnabledIcon className="topBar__contact__item" />
            <ChatIcon className="topBar__contact__item" />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default TopBar;
