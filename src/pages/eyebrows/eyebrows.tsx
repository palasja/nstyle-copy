import './eyebrows.css';
import TopPanel from '../../components/topPanel';
import CostInfo from '../../components/costInfo';
import { useTranslation } from 'react-i18next';

const Eyebrows = () => {
  const { t } = useTranslation();
  return (
    <>
      <TopPanel />
      <main>
        <CostInfo name={t('db.eyebrowsName')} showCostHeaedr={true} isOneLine={true} />
        <section className="additional">
          <img src={new URL(`../../assets/images/additionsl_eyebrows.jpg`, import.meta.url).href} />
          <h4 className="additional_text">{t('eyebrows.eyelashes')}</h4>
          <h4 className="additional_text">{t('eyebrows.eyebrows')}</h4>
        </section>
      </main>
    </>
  );
};
export default Eyebrows;
