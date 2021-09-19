import React, { useState } from "react";
import { Container } from "../../general";
import { Menu, Contact } from "../";
import ContactsIcon from "@material-ui/icons/Contacts";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import MenuIcon from "@material-ui/icons/Menu";
import "./topBar.scss";

function TopBar() {
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={"topBar"}>
      <Container className="topBar__wrapper">
        <div className="topBar__inner">
          <a href="#intro" className="topBar__logo">
            NUR<span>boloT</span>
          </a>
          <button className="menu__btn">
            <MenuIcon
              className="menu__btn-icon"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </button>

          <Menu
            items={[
              { name: "home", link: "intro" },
              { name: "portfolio", link: "portfolio" },
              { name: "aboutMe", link: "aboutMe" },
              { name: "skills", link: "skills" },
              { name: "contacts", link: "contacts" },
            ]}
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
          />
          <button
            className="topBar__contact"
            onClick={() => setContactOpen(!contactOpen)}
          >
            <ContactsIcon style={{ fontSize: 40 }} />
          </button>
          <Contact
            items={[
              {
                icon: <PhoneIcon style={{ fontSize: 35 }} />,
                link: "tel:+996704690533",
              },
              {
                icon: <EmailIcon style={{ fontSize: 35 }} />,
                link: "mailto:@nurbolot.boobekov.pls@gmail.com",
              },
              {
                icon: <TelegramIcon style={{ fontSize: 35 }} />,
                link: "https://web.telegram.org/z/#-1155658217",
              },
              {
                icon: <InstagramIcon style={{ fontSize: 35 }} />,
                link: "https://www.instagram.com/jyldyzacademy/",
              },
              {
                icon: <GitHubIcon style={{ fontSize: 35 }} />,
                link: "https://github.com/nurbolot143",
              },
            ]}
            contactOpen={contactOpen}
            setContactOpen={setContactOpen}
          />
        </div>
      </Container>
    </header>
  );
}

export default TopBar;
