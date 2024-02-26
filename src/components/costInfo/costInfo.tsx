import { useState, useEffect } from 'react';
import { getServiceByName } from '../../../db/operations';
import { ServiceCostInfo } from '../../type/costType';
import CostTable from '../costTable';
import './costInfo.css';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
const CostInfo = (props: { name: string; showCostHeaedr?: boolean; isOneLine?: boolean }) => {
  const [costInfo, setCostInfo] = useState<ServiceCostInfo>();
  const { name, showCostHeaedr: showCostHeaedr, isOneLine } = props;

  //key for reload after change language
  const [key, setKey] = useState(0);
  const { t } = useTranslation();

  const subscriberChangeLang = () => {
    setKey(Math.random());
  };
  useEffect(() => {
    getAllServices();
    i18next.on('languageChanged', subscriberChangeLang);
    // return i18next.off('name', subscriberChangeLang);
  }, [key]);

  const getAllServices = async () => {
    const response = (await getServiceByName(name)) as ServiceCostInfo;
    setCostInfo(response);
  };

  return (
    <section>
      {showCostHeaedr && <h3 className="service-cost">{t('costInfo.serviceCost')}</h3>}
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
