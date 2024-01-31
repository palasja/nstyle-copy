import { NavLink } from 'react-router-dom';
import './footer.css';
import SocialMediaLink from '../socialMediaLink';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_left">
        <img
          className="footer_arrow-left"
          src={new URL(`../../assets/images/arrow-right.png`, import.meta.url).href}
          alt="Arrow right"
        />
        <nav className="footer_nav">
          <ul className="footer_nav-list">
            <li className="footer_nav-list-item">
              <NavLink to="/">Главная</NavLink>
            </li>
            <li className="footer_nav-list-item">
              <NavLink to="err">Товары</NavLink>
            </li>
            <li className="footer_nav-list-item">
              <NavLink to="/Services">Услуги</NavLink>
            </li>
            <li className="footer_nav-list-item">
              <a href="https://www.instagram.com/nstyle.by/">Фотогалерея</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer_center">
        <NavLink to="/" className="footer_ligo-link" data-testid="logo-link">
          <img
            className="footer_logo-image"
            src={new URL(`../../assets/logo.svg`, import.meta.url).href}
            alt="Rs School logo"
          />
        </NavLink>
        <SocialMediaLink />
        <p className="footer_org-info">
          ООО «Очаровательная леди»
          <br />
          УНП: 191123240
          <br />
          Адрес: г.Минск, ул. Ложинская , 22
          <br />
          Ст. метро Уручье
        </p>
      </div>
      <div className="footer_right">
        <img
          src={new URL(`../../assets/images/arrow-right.png`, import.meta.url).href}
          alt="Arrow right"
        />
        <nav className="footer_nav">
          <ul className="footer_nav-list">
            <li className="footer_nav-list-item">
              <NavLink to="/Blog">Блог</NavLink>
            </li>
            <li className="footer_nav-list-item">
              <NavLink to="/Team">Команда</NavLink>
            </li>
            <li className="footer_nav-list-item">
              <NavLink to="/Vacancies">Вакансии</NavLink>
            </li>
            <li className="footer_nav-list-item">
              <NavLink to="/Contacts">Контакты</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer_devolop-blok">
        <span>© 2024 Новый Стиль. Все права защищены.</span>{' '}
        <span className="footer_privacy">Политика конфиденциальности</span>{' '}
        <span>Дизайн и разработка Проект А-2</span>
      </div>
    </footer>
  );
};

export default Footer;
