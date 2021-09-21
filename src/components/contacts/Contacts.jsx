import React from "react";

import "./contacts.scss";

function Contacts({ items, contactsOpen, setContactsOpen }) {
  return (
    <div className={"contacts " + (contactsOpen && "contacts--active")}>
      {items &&
        items.map((item, idx) => (
          <a
            className="contacts__item"
            key={`${item.icon}_${idx}`}
            href={item.link}
            onClick={() => setContactsOpen(false)}
            target="_blanc"
          >
            {item.icon}
          </a>
        ))}
    </div>
  );
}

export default Contacts;
