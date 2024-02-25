import { useTranslation } from 'react-i18next';
import { tablesNameIdMap } from '../../assets/items';
import CostInfo from '../../components/costInfo';
import TopPanel from '../../components/topPanel';
import './manicure.css';

const Manicure = () => {
  const { t } = useTranslation();
  return (
    <>
      <TopPanel />
      <CostInfo
        name={t('db.manicureName')}
        showCostHeaedr={true}
        isOneLine={true}
      />
    </>
  );
};

export default Manicure;
