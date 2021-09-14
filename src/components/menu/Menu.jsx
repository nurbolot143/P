import "./menu.scss";

function Menu({ items }) {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {items &&
          items.map((item, idx) => (
            <li key={`${item.name}_${idx}`} className="menu__item">
              <a href={`#${item.link}`} className="menu__link">
                {item.name}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Menu;
