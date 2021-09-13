import "./menu.scss";

function Menu() {
  return (
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#" className="menu__link">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            About Me
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Skills
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Portfolio
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
