import { Container } from "../../general";
import "./intro.scss";

function Intro() {
  return (
    <section className="intro" id="intro">
      <Container className="intro__content">
        <h1 className="intro__title">
          Hello, I'm <span>Nurbolot Boobekov</span>.<br /> I'm front-end
          developer.
        </h1>
      </Container>
    </section>
  );
}

export default Intro;
