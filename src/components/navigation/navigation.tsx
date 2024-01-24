import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <div className="screen-wide">
      <div className="navigation-panel">
        <nav>
          <ul className="navigation-panel_left">
            <li>
              <NavLink
                to="/Services"
                className={({ isActive }) => (isActive ? 'navigation-panel_active' : 'inactive')}
              >
                Услуги
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Discount"
                className={({ isActive }) => (isActive ? 'navigation-panel_active' : 'inactive')}
              >
                Акции
              </NavLink>
            </li>
          </ul>
        </nav>
        <a href="/" className="logo">
          <img src={new URL(`../../assets/logo.svg`, import.meta.url).href} alt="NStyle logo" />
        </a>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/Blog"
                className={({ isActive }) => (isActive ? 'navigation-panel_active' : 'inactive')}
              >
                Блог
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Team"
                className={({ isActive }) => (isActive ? 'navigation-panel_active' : 'inactive')}
              >
                Команда
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contacts"
                className={({ isActive }) => (isActive ? 'navigation-panel_active' : 'inactive')}
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
