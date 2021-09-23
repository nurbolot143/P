import { Container } from "../../general";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import "./aboutMe.scss";

function AboutMe() {
  return (
    <section className="aboutMe" id="aboutMe">
      <Container className="aboutMe__wrapper">
        <div className="aboutMe__image"></div>
        <div className="aboutMe__content">
          <h2>about me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            repellat eos labore, totam expedita voluptatibus, debitis architecto
            vel repellendus porro nostrum ad tempore, impedit fugit autem saepe
            ea incidunt laborum.
          </p>

          <a href="#skills">
            View my skills
            <ArrowForwardIcon className="icon" />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;
