import { NavLink } from 'react-router-dom';
import './navigation.css';
import { useState } from 'react';

const Navigation = () => {
  const [isShowMoreServices, setisShowMoreServices] = useState(false);

  return (
    <div className="screen-wide_stiky">
      <div className="screen-wide">
        <div className="navigation-panel">
          <nav className="navigation-panel_left">
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_active' : 'inactive') + ' navigation-panel_main-link'
              }
              onMouseEnter={() => setisShowMoreServices(true)}
              onMouseLeave={() => setisShowMoreServices(false)}
            >
              Услуги
            </NavLink>

            <NavLink
              to="/Discount"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_active' : 'inactive') + ' navigation-panel_main-link'
              }
            >
              Акции
            </NavLink>
          </nav>
          <a href="/" className="logo">
            <img src={new URL(`../../assets/logo.svg`, import.meta.url).href} alt="NStyle logo" />
          </a>
          <nav className="navigation-panel_right">
            <NavLink
              to="/Blog"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_active' : 'inactive') + ' navigation-panel_main-link'
              }
            >
              Блог
            </NavLink>
            <NavLink
              to="/Team"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_active' : 'inactive') + ' navigation-panel_main-link'
              }
            >
              Команда
            </NavLink>
            <NavLink
              to="/Contacts"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_active' : 'inactive') + ' navigation-panel_main-link'
              }
            >
              Контакты
            </NavLink>
          </nav>
          <nav
            className={
              'navigation-panel_more-services ' +
              (isShowMoreServices ? 'navigation-panel_more-services__show' : '')
            }
            onMouseEnter={() => setisShowMoreServices(true)}
            onMouseLeave={() => setisShowMoreServices(false)}
          >
            <NavLink
              to="/Services/Haidress"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_more-services__active' : 'inactive') +
                ' navigation-panel_additional-link'
              }
            >
              Парикхмахерские
            </NavLink>
            <NavLink
              to="/Services/Manicure"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_more-services__active' : 'inactive') +
                ' navigation-panel_additional-link'
              }
            >
              Ногтевой сервис
            </NavLink>
            <NavLink
              to="/Services/Cosmetic"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_more-services__active' : 'inactive') +
                ' navigation-panel_additional-link'
              }
            >
              Косметические
            </NavLink>
            <NavLink
              to="/Services/Eyebrows"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_more-services__active' : 'inactive') +
                ' navigation-panel_additional-link'
              }
            >
              Брови | Русницы | Макияж
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
