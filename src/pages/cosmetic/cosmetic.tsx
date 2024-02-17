import { tablesNameIdMap } from '../../assets/items';
import CostInfo from '../../components/costInfo';
import TopPanel from '../../components/topPanel';
import './cosmetic.css';

const Cosmetic = () => {
  return (
    <>
      <TopPanel />
      <CostInfo id={tablesNameIdMap.get('cosmeticEstetic') as string} showCostHeaedr={true} isOneLine={true}/>
      <CostInfo id={tablesNameIdMap.get('depilation') as string} />
    </>
  );
};

export default Cosmetic;
