import { useState, useEffect } from "react";
import { Container } from "../../general";
import { PortfolioCartItem } from "..";
import "./portfolio.scss";

function Portfolio() {
  const [selected, setselected] = useState("featured");

  const portfolioCartItems = [
    { id: 1, category: "featured", title: "Featured" },
    { id: 2, category: "web apps", title: "Web Apps" },
    { id: 3, category: "react apps", title: "React Apps" },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <Container className="portfolio__wrapper">
        <h2 className="portfolio__title">Portfolio</h2>
        <ul className="portfolio__category">
          {portfolioCartItems.map((item) => (
            <PortfolioCartItem
              item={item.title}
              key={`${item.title}_${item.id}`}
              active
            />
          ))}
        </ul>

        <div className="portfolio__list">
          <div className="portfolio__item">
            <img
              src="https://media.istockphoto.com/photos/data-scientists-male-programmer-using-laptop-analyzing-and-developing-picture-id1295900106?b=1&k=20&m=1295900106&s=170667a&w=0&h=kQ2UWilU4Bild5aP03CaF65gMbSI-chG--7dd2oS8GM="
              alt=""
            />
            <h3>Lorem!</h3>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
