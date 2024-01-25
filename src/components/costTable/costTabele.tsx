import { ServiceCostTable } from 'src/type/costType';
import './costTable.css';
import arrow from '../../assets/images/arrow-right.png';

const CostTable = (props: ServiceCostTable) => {
  const { name, services } = props;
  return (
    <section className="service-list">
      <h4 className="service-list_name">{name}</h4>
      <ul className="service-list_list">
        {services.map((costRow) => (
          <li key={costRow.id} className="service-list_list__row">
            {costRow.name}
            <span>{costRow.cost} руб.</span>
          </li>
        ))}
      </ul>
      <div className="service-list_arrow">
        <img
          src={arrow}
          alt="Arrow right"
        />
      </div>
    </section>
  );
};

export default CostTable;
