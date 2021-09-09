import React from "react";
import { NavBar } from "..";
import Container from "../../general/container/Container";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <Container>
        <NavBar />
      </Container>
    </div>
  );
}

export default Header;
