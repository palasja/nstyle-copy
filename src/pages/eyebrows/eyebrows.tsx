import './eyebrows.css';
import TopPanel from '../../components/topPanel';
import { tablesNameIdMap } from '../../assets/items';
import CostInfo from '../../components/costInfo';

const Eyebrows = () => {
  return (
    <>
      <TopPanel />
      <main>
        <CostInfo
          id={tablesNameIdMap.get('eyebrows') as string}
          showCostHeaedr={true}
          isOneLine={true}
        />
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
