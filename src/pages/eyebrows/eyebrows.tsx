import './eyebrows.css';
import TopPanel from '../../components/topPanel';
import CostTable from '../..//components/costTable/costTabele';
import { useEffect, useState } from 'react';
import { allServices } from '../../../db/operations';
import { ResponseCostTable, ServiceCostInfo } from '../../type/costType';

const Eyebrows = () => {
  const [eyebrowsEyelashes, setEyebrowsEyelashes] = useState<ServiceCostInfo>();

  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    const response = (await allServices()) as ResponseCostTable;
    setEyebrowsEyelashes(response.data[0].data);
  };

  return (
    <>
      <TopPanel />
      <main>
        <h3 className="service-cost">Стоимость услуг</h3>
        <h4 className="service-type">| {eyebrowsEyelashes?.name}</h4>
        {eyebrowsEyelashes?.tables.map((serviceTable) => (
          <CostTable
            key={serviceTable.id}
            services={serviceTable.services}
            id={serviceTable.id}
            name={serviceTable.name}
          />
        ))}
        <section className="additional">
          <img src={new URL(`../../assets/images/additionsl_eyebrows.jpg`, import.meta.url).href} />
          <h4 className="additional_text">Наращивание ресниц в Минске</h4>
          <h4 className="additional_text">Уход за Бровями</h4>
        </section>
      </main>
    </>
  );
};
export default Eyebrows;
