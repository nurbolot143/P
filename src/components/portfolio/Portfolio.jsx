import { Container } from "../../general";
import { PortfolioCartItem } from "..";
import "./portfolio.scss";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <Container>
        <h2 className="portfolio__title">Portfolio</h2>
        <ul className="portfolio__cart">
          <PortfolioCartItem />
          <PortfolioCartItem />
          <PortfolioCartItem />
          <PortfolioCartItem />
        </ul>

        <div className="portfolio__list"></div>
      </Container>
    </section>
  );
}

export default Portfolio;
