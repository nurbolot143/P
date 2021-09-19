import { useState } from "react";
import { Container } from "../../general";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./skills.scss";

function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSubmit = (direction) => {
    if (direction === "prev") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide);
    } else {
      setCurrentSlide(
        currentSlide < data.length - 1 ? currentSlide + 1 : currentSlide
      );
    }
  };

  const data = [
    {
      id: 1,
      title: "HTML",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouo35olUMABRtk82_z9W5CTen-WFDysgPt1ZdCv-PzFBuC-yc97X5jj-voLOZmk8kcbQ&usqp=CAU",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, soluta itaque dolore maxime.",
    },
    {
      id: 2,
      title: "CSS",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlEA6Vsz0fqBzwPvPnhncrBwAXizgKMXqSNQmLLctUOtagnhT9U2b9zWAAvFBo4jfAYA&usqp=CAU",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, soluta itaque dolore maxime.",
    },
    {
      id: 3,
      title: "JS",
      img: "https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, soluta itaque dolore maxime.",
    },
    {
      id: 4,
      title: "React",
      img: "https://st2.depositphotos.com/22836852/45495/v/380/depositphotos_454950922-stock-illustration-react-icon-in-a-hexagon.jpg",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, soluta itaque dolore maxime.",
    },
    {
      id: 5,
      title: "Photoshop",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzqIY9-v8ADF7_Lyk6P2d-Ztimkzm16wIBO9D6OHg3ZLhyoO4b_gXujn-AfINUWucN0o&usqp=CAU",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, soluta itaque dolore maxime.",
    },
    {
      id: 6,
      title: "Illustrator",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPpVRLeso7RQlyA9nImeYz51JDEHm5e1ktMsuVKKNr1lDppm-BiJkH3U11J_Og_SVOEM&usqp=CAU",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, soluta itaque dolore maxime.",
    },
    {
      id: 7,
      title: "Figma",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fZ5FphOn9GnxXLvBpCJRQDi3uae1z0oH3E2QFWUGLStOgE6uUSmGxdTf58Tiq0O7hO8&usqp=CAU",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, soluta itaque dolore maxime.",
    },
  ];

  return (
    <section className="skills" id="skills">
      <Container>
        <h2>skills</h2>
        <div className="skills__slider">
          <div
            className="skills__slider-inner"
            style={{ transform: `translateX(-${currentSlide * 410}px)` }}
          >
            {data.map((Item) => (
              <div
                className="skills__slider-item"
                key={`${Item.title}_${Item.id}`}
              >
                <h3>{Item.title}</h3>
                <img src={Item.img} alt={Item.title} />
                <p>{Item.content}</p>
              </div>
            ))}
          </div>

          <button className="skills__slider-btn skills__slider-btn-prev">
            <ArrowBackIosIcon
              className="skills__slider-arrow"
              onClick={() => handleSubmit("prev")}
            />
          </button>
          <button className="skills__slider-btn skills__slider-btn-next">
            <ArrowForwardIosIcon
              className="skills__slider-arrow"
              onClick={() => handleSubmit("next")}
            />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
