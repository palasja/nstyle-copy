import CostInfo from '../../components/costInfo';
import TopPanel from '../../components/topPanel';
import './haidress.css';
import { useTranslation } from 'react-i18next';

const Haidress = () => {
  const { t } = useTranslation();
  return (
    <>
      <TopPanel />
      <CostInfo name={t('db.hairdressName')} showCostHeaedr={true} />
      <CostInfo name={t('db.hairstylingName')} />
      <CostInfo name={t('db.haircoloringName')} />
      <CostInfo name={t('db.hairserviceName')} />
    </>
  );
};

export default Haidress;
