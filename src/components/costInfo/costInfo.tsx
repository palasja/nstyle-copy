import { useState, useEffect } from 'react';
import { getServiceByType } from '../../../db/operations';
import { ServiceCostInfo } from '../../type/costType';
import CostTable from '../costTable';
import './costInfo.css';

const CostInfo = (props: { id: string; showCostHeaedr?: boolean; isOneLine?: boolean }) => {
  const [eyebrowsEyelashes, setEyebrowsEyelashes] = useState<ServiceCostInfo>();
  const { id, showCostHeaedr: showCostHeaedr, isOneLine } = props;
  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    const response = (await getServiceByType(id)) as ServiceCostInfo;
    setEyebrowsEyelashes(response);
  };

  return (
    <section>
      {showCostHeaedr && <h3 className="service-cost">Стоимость услуг</h3>}
      <h4 className="service-type">| {eyebrowsEyelashes?.name}</h4>
      <div className={isOneLine ? 'service-cost_container__oneline' : 'service-cost_container'}>
        {eyebrowsEyelashes?.tables.map((serviceTable) => (
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
