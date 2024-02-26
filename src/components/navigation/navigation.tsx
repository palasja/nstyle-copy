import { NavLink } from 'react-router-dom';
import './navigation.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LangSwitcher from '../langSwitcher';

const Navigation = () => {
  const [isShowMoreServices, setisShowMoreServices] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="screen-wide_stiky">
      <div className="screen-wide">
        <div className="navigation-panel">
          <nav className="navigation-panel_left">
            <NavLink
              to="/Services"
              data-testid="drop-down-link"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_active' : 'inactive') + ' navigation-panel_main-link'
              }
              onMouseEnter={() => setisShowMoreServices(true)}
              onMouseLeave={() => setisShowMoreServices(false)}
            >
              {t('navigation.services')}
            </NavLink>

            <NavLink
              to="/Discount"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_active' : 'inactive') + ' navigation-panel_main-link'
              }
            >
              {t('navigation.descount')}
            </NavLink>
          </nav>
          <NavLink to="/" className="logo" data-testid="logo-link">
            <img src={new URL(`../../assets/logo.svg`, import.meta.url).href} alt="NStyle logo" />
          </NavLink>
          {/* <a href="/" className="logo" data-testid="logo-link">
            <img src={new URL(`../../assets/logo.svg`, import.meta.url).href} alt="NStyle logo" />
          </a> */}
          <nav className="navigation-panel_right">
            <NavLink
              to="/Blog"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_active' : 'inactive') + ' navigation-panel_main-link'
              }
            >
              {t('navigation.blog')}
            </NavLink>
            <NavLink
              to="/Team"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_active' : 'inactive') + ' navigation-panel_main-link'
              }
            >
              {t('navigation.team')}
            </NavLink>
            <NavLink
              to="/Contacts"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_active' : 'inactive') + ' navigation-panel_main-link'
              }
            >
              {t('navigation.contacts')}
            </NavLink>
            <LangSwitcher />
          </nav>

          <nav
            className={
              'navigation-panel_more-services ' +
              (isShowMoreServices ? 'navigation-panel_more-services__show' : '')
            }
            onMouseEnter={() => setisShowMoreServices(true)}
            onMouseLeave={() => setisShowMoreServices(false)}
            data-testid="drop-down-element"
          >
            <NavLink
              to="/Services/Haidress"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_more-services__active' : 'inactive') +
                ' navigation-panel_additional-link'
              }
            >
              {t('navigation.submenu.haidress')}
            </NavLink>
            <NavLink
              to="/Services/Manicure"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_more-services__active' : 'inactive') +
                ' navigation-panel_additional-link'
              }
            >
              {t('navigation.submenu.manicure')}
            </NavLink>
            <NavLink
              to="/Services/Cosmetic"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_more-services__active' : 'inactive') +
                ' navigation-panel_additional-link'
              }
            >
              {t('navigation.submenu.cosmetic')}
            </NavLink>
            <NavLink
              to="/Services/Eyebrows"
              className={({ isActive }) =>
                (isActive ? 'navigation-panel_more-services__active' : 'inactive') +
                ' navigation-panel_additional-link'
              }
            >
              {t('navigation.submenu.eyebrows')}
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
