import React from "react";
import "./portfolioCarts.scss";

function PortfolioCarts({ item, category, active, setSelected }) {
  return (
    <li
      className={active ? "item item--active" : "item"}
      onClick={() => {
        setSelected(category);
      }}
    >
      <span></span>
      {item}
    </li>
  );
}

export default PortfolioCarts;
