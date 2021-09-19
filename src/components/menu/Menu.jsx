import "./menu.scss";

function Menu({ items, menuOpen, setMenuOpen }) {
  return (
    <nav className={"menu " + (menuOpen && "menu--active")}>
      <ul className="menu__list">
        {items &&
          items.map((item, idx) => (
            <li key={`${item.name}_${idx}`} className="menu__item">
              <a
                href={`#${item.link}`}
                className="menu__link"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Menu;
