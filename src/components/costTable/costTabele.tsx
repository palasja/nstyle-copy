import { ServiceCostRow, ServiceCostTable } from 'src/type/costType';
import './costTable.css';

const CostTable = (props: ServiceCostTable) => {
  const { name, services } = props;
  const getCostString = (service: ServiceCostRow): string => {
    let res = '';
    if (service.cost !== undefined) {
      res = `${service.cost} руб.`;
    } else if (service.minCost !== undefined && service.maxCost === undefined) {
      res = `от ${service.minCost} руб.`;
    } else if (service.maxCost !== undefined) {
      res = `${service.minCost}-${service.maxCost} руб.`;
    }
    return res;
  };
  return (
    <section className="service-list">
      <h4 className="service-list_name">{name}</h4>
      <ul className="service-list_list">
        {services.map((costRow) => (
          <li key={costRow.id} className="service-list_list__row">
            {costRow.name}
            <span className="service-list_cost">{getCostString(costRow)}</span>
          </li>
        ))}
      </ul>
      <div className="service-list_arrow">
        <img
          src={new URL(`../../assets/images/arrow-right.png`, import.meta.url).href}
          alt="Arrow right"
        />
      </div>
    </section>
  );
};

export default CostTable;
