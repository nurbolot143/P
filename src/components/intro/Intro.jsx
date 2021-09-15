import { Container } from "../../general";
import { useRef, useEffect } from "react";
import { init } from "ityped";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import "./intro.scss";

function Intro() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      backDelay: 5000,
      backSpeed: 60,
      strings: [" I am front-end developer."],
    });
  }, []);

  return (
    <section className="intro" id="intro">
      <Container className="intro__content">
        <h1 className="intro__title">
          Hello, I'm <span>Nurbolot Boobekov</span>.
        </h1>
        <h2>
          <span ref={animatedTextRef}></span>
        </h2>
        <a href="#aboutMe">
          <KeyboardArrowDownIcon className="intro__icon" />
        </a>
      </Container>
    </section>
  );
}

export default Intro;
