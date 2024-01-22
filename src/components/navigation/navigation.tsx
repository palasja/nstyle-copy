import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <div className="navigation-panel">
      <nav>
        <ul className="navigation-panel_left">
          <li>
            <NavLink
              to="/Services"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Услуги
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Discount"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Акции
            </NavLink>
          </li>
        </ul>
      </nav>
      <a href="/" className="logo">
        <img src={new URL(`../../assets/logo.svg`, import.meta.url).href} alt="Rs School logo" />
      </a>
      <nav>
        <ul>
          <li>
            <NavLink to="/Blog" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              Блог
            </NavLink>
          </li>
          <li>
            <NavLink to="/Team" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              Команда
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contacts"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
