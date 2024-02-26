import { NavLink } from 'react-router-dom';
import './servicesCost.css';
import CostInfo from '../costInfo';
import { useTranslation } from 'react-i18next';

const ServicesCost = () => {
  const { t } = useTranslation();
  return (
    <section className="container">
      <div>
        <div className="description">
          <h4 className="description-name">{t('servicesCost.services')}</h4>
          <h3 className="description-shortprice">{t('servicesCost.shortPrice')}</h3>
          <p className="description-promo">{t('servicesCost.description')}</p>
          <NavLink to="/Services" className={'all-services'}>
            {t('servicesCost.allServices')}
          </NavLink>
        </div>
      </div>
      <div className="home-cost">
        <CostInfo name={t('db.homeName')} />
      </div>
    </section>
  );
};
export default ServicesCost;
