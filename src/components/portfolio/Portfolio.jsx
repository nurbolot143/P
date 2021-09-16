import { useState, useEffect } from "react";
import { featured, webApps, reactApps } from "../db";

import { Container } from "../../general";
import { PortfolioCartItem } from "..";
import "./portfolio.scss";

const portfolioCartItems = [
  { id: 1, category: "featured", title: "Featured" },
  { id: 2, category: "web apps", title: "Web Apps" },
  { id: 3, category: "react apps", title: "React Apps" },
];

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "web apps":
        setData(webApps);
        break;

      case "react apps":
        setData(reactApps);
        break;

      default:
        setData(featured);
        break;
    }
  }, [selected]);

  return (
    <section className="portfolio" id="portfolio">
      <Container className="portfolio__wrapper">
        <h2 className="portfolio__title">Portfolio</h2>
        <ul className="portfolio__category">
          {portfolioCartItems.map((item) => (
            <PortfolioCartItem
              item={item.title}
              key={`${item.title}_${item.id}`}
              active={selected === item.category}
              setSelected={setSelected}
              category={item.category}
            />
          ))}
        </ul>

        <div className="portfolio__list">
          {data.map((dataItem) => (
            <div
              className="portfolio__item"
              key={`${dataItem.title}_${dataItem.id}`}
            >
              <img src={dataItem.img} alt={dataItem.title} />
              <h3>{dataItem.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
