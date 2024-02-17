import { NavLink } from 'react-router-dom';
import './servicesCost.css';

const ServicesCost = () => {
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
    </section>
  );
};
export default ServicesCost;
