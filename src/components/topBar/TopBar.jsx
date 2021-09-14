import React from "react";
import { Container } from "../../general";
import { Menu } from "../";
import ContactsIcon from "@material-ui/icons/Contacts";
import "./topBar.scss";

function TopBar({ contactsOpen, setContactsOpen }) {
  return (
    <header className={"topBar"}>
      <Container>
        <div className="topBar__inner">
          <a href="#home" className="topBar__logo">
            NUR<span>boloT</span>
          </a>
          <Menu />
          <button
            onClick={() => setContactsOpen(!contactsOpen)}
            className="topBar__contacts"
          >
            <ContactsIcon
              className="topBar__contacts__icon"
              style={{ fontSize: 35 }}
            />
          </button>
        </div>
      </Container>
    </header>
  );
}

export default TopBar;
