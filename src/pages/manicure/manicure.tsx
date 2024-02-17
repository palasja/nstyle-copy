import { tablesNameIdMap } from '../../assets/items';
import CostInfo from '../../components/costInfo';
import TopPanel from '../../components/topPanel';
import './manicure.css';

const Manicure = () => {
  return (
    <>
      <TopPanel />
      <CostInfo id={tablesNameIdMap.get('manicure') as string} showCostHeaedr={true} isOneLine={true} />
    </>
  );
};

export default Manicure;
