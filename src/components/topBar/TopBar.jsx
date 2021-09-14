import React, { useState } from "react";
import { Container } from "../../general";
import { Menu, Connection } from "../";
import ContactsIcon from "@material-ui/icons/Contacts";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./topBar.scss";

function TopBar() {
  const [connectionOpen, setConnectionOpen] = useState(false);

  return (
    <header className={"topBar"}>
      <Container className="topBar__wrapper">
        <div className="topBar__inner">
          <a href="#home" className="topBar__logo">
            NUR<span>boloT</span>
          </a>
          <Menu
            items={[
              { name: "home", link: "intro" },
              { name: "aboutMe", link: "aboutMe" },
              { name: "skills", link: "skills" },
              { name: "portfolio", link: "portfolio" },
              { name: "contacts", link: "contacts" },
            ]}
          />
          <button
            className="topBar__contacts"
            onClick={() => setConnectionOpen(!connectionOpen)}
          >
            <ContactsIcon
              className="topBar__contacts__icon"
              style={{ fontSize: 35 }}
            />
          </button>
          <Connection
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
                icon: <WhatsAppIcon style={{ fontSize: 35 }} />,
                link: "https://wa.me/+996704690533",
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
                icon: <FacebookIcon style={{ fontSize: 35 }} />,
                link: "https://www.facebook.com/",
              },
            ]}
            connectionOpen={connectionOpen}
            setConnectionOpen={setConnectionOpen}
          />
        </div>
      </Container>
    </header>
  );
}

export default TopBar;
