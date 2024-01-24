import './eyebrows.css';
import TopPanel from '../../components/topPanel';
import CostTable from '../..//components/costTable/costTabele';
import EyebrowsEyelashes from '../../assets/items';

const Eyebrows = () => {
  const eyebrowsEyelashes = EyebrowsEyelashes;
  return (
    <>
      <TopPanel />
      <main>
        <h3 className="service-cost">Стоимость услуг</h3>
        <h4 className="service-type">{eyebrowsEyelashes.name}</h4>
        {EyebrowsEyelashes.service.map((serviceTable) => (
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
