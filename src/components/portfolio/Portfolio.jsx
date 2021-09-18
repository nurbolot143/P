import { useState, useEffect } from "react";
import { featured, webApps, reactApps } from "../db";
import { Container } from "../../general";
import { PortfolioCartItem } from "..";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "./portfolio.scss";

const portfolioCartItems = [
  { id: 1, category: "featured", title: "Featured" },
  { id: 2, category: "web apps", title: "Web Apps" },
  { id: 3, category: "react apps", title: "React Apps" },
];

function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const handleClick = (direction) => {
    if (direction === "prev") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide);
    } else {
      setCurrentSlide(
        currentSlide < data.length - 1 ? currentSlide + 1 : currentSlide
      );
    }
  };

  return (
    <section className="portfolio" id="portfolio">
      <Container className="portfolio__wrapper">
        <h2 className="portfolio__title">Portfolio</h2>
        <div className="portfolio__right">
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

          <div className="portfolio__works" id="portfolio__works">
            <div
              className="portfolio__works__slider"
              style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
              {data.map((dataItem) => (
                <div
                  className="portfolio__works__slider-inner"
                  key={`${dataItem.title}_${dataItem.id}`}
                >
                  <div className="portfolio__works__slider-item">
                    <h3>{dataItem.title}</h3>
                    <img src={dataItem.img} alt={dataItem.title} />
                  </div>
                </div>
              ))}
            </div>
            <button className="portfolio__works__slider-btn portfolio__works__slider-btn-prev">
              <ArrowBackIosIcon
                className="portfolio__works__slider-arrow"
                onClick={() => handleClick("prev")}
              />
            </button>
            <button className="portfolio__works__slider-btn portfolio__works__slider-btn-next">
              <ArrowForwardIosIcon
                className="portfolio__works__slider-arrow"
                onClick={() => handleClick("next")}
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
