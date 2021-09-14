import React from "react";

import "./contact.scss";

function Contact({ items, contactOpen, setContactOpen }) {
  return (
    <div className={"contact " + (contactOpen && "contact--active")}>
      {items &&
        items.map((item, idx) => (
          <a
            className="contact__item"
            key={`${item.icon}_${idx}`}
            href={item.link}
            onClick={() => setContactOpen(false)}
            target="_blanc"
          >
            {item.icon}
          </a>
        ))}
    </div>
  );
}

export default Contact;
