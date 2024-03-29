import CostInfo from '../../components/costInfo';
import TopPanel from '../../components/topPanel';
import './cosmetic.css';
import { useTranslation } from 'react-i18next';

const Cosmetic = () => {
  const { t } = useTranslation();
  return (
    <>
      <TopPanel />
      <CostInfo name={t('db.cosmeticEsteticName')} showCostHeaedr={true} isOneLine={true} />
      <CostInfo name={t('db.homeName')} />
    </>
  );
};

export default Cosmetic;
