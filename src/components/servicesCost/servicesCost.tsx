import { NavLink } from 'react-router-dom';
import './servicesCost.css';
import { tablesNameIdMap } from '../../assets/items';
import CostInfo from '../costInfo';
import { useTranslation } from 'react-i18next';

const ServicesCost = () => {
  const { t } = useTranslation();
  return (
    <section className="container">
      <div>
        <div className="description">
          <h4 className="description-name">Услуги студии красоты</h4>
          <h3 className="description-shortprice">Краткий прайс</h3>
          <p className="description-promo">
            Мы понимаем ценность денег, поэтому предлагаем вам лучшие пакеты по доступной цене.
          </p>
          <NavLink to="/Services" className={'all-services'}>
            Все Услуги
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
