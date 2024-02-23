import { useState, useEffect } from 'react';
import { getServiceByType } from '../../../db/operations';
import { ServiceCostInfo } from '../../type/costType';
import CostTable from '../costTable';
import './costInfo.css';

const CostInfo = (props: { id: string; showCostHeaedr?: boolean; isOneLine?: boolean }) => {
  const [costInfo, setCostInfo] = useState<ServiceCostInfo>();
  const { id, showCostHeaedr: showCostHeaedr, isOneLine } = props;
  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    const response = (await getServiceByType(id)) as ServiceCostInfo;
    setCostInfo(response);
  };

  return (
    <section>
      {showCostHeaedr && <h3 className="service-cost">Стоимость услуг</h3>}
      {costInfo?.name && <h4 className="service-type">| {costInfo?.name}</h4>}
      <div className={isOneLine ? 'service-cost_container__oneline' : 'service-cost_container'}>
        {costInfo?.tables.map((serviceTable) => (
          <CostTable
            key={serviceTable.id}
            services={serviceTable.services}
            id={serviceTable.id}
            name={serviceTable.name}
          />
        ))}
      </div>
    </section>
  );
};

export default CostInfo;
