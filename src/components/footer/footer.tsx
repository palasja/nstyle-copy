import { NavLink } from 'react-router-dom';
import './footer.css';
import SocialMediaLink from '../socialMediaLink';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();

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
              <NavLink to="/">{t('footer.main')}</NavLink>
            </li>
            <li className="footer_nav-list-item">
              <NavLink to="err">{t('footer.goods')}</NavLink>
            </li>
            <li className="footer_nav-list-item">
              <NavLink to="/Services">{t('footer.services')}</NavLink>
            </li>
            <li className="footer_nav-list-item">
              <a href="https://www.instagram.com/nstyle.by/">{t('footer.photogalary')}</a>
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
          {t('footer.orginfo')}
          <br />
          {t('footer.unp')}
          <br />
          {t('footer.address')}
          <br />
          {t('footer.metro')}
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
              <NavLink to="/Blog">{t('footer.blog')}</NavLink>
            </li>
            <li className="footer_nav-list-item">
              <NavLink to="/Team">{t('footer.team')}</NavLink>
            </li>
            <li className="footer_nav-list-item">
              <NavLink to="/Vacancies">{t('footer.vacation')}</NavLink>
            </li>
            <li className="footer_nav-list-item">
              <NavLink to="/Contacts">{t('footer.contacts')}</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer_devolop-blok">
        <span>{t('footer.licens')}</span>{' '}
        <span className="footer_privacy">{t('footer.politics')}</span>{' '}
        <span>{t('footer.develoder')}</span>
      </div>
    </footer>
  );
};

export default Footer;
