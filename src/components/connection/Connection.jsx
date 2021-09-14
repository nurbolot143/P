import React from "react";

import "./connection.scss";

function Connection({ items, connectionOpen, setConnectionOpen }) {
  return (
    <div className={"connection " + (connectionOpen && "connection--active")}>
      {items &&
        items.map((item, idx) => (
          <a
            className="connection__item"
            key={`${item.icon}_${idx}`}
            href={item.link}
            onClick={() => setConnectionOpen(false)}
            target="_blanc"
          >
            {item.icon}
          </a>
        ))}
    </div>
  );
}

export default Connection;
