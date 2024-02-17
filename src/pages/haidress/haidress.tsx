import { tablesNameIdMap } from '../../assets/items';
import CostInfo from '../../components/costInfo';
import TopPanel from '../../components/topPanel';
import './haidress.css';

const Haidress = () => {
  return (
    <>
      <TopPanel />
      <CostInfo id={tablesNameIdMap.get('hairdress') as string} showCostHeaedr={true} />
      <CostInfo id={tablesNameIdMap.get('hairstyling') as string} />
      <CostInfo id={tablesNameIdMap.get('haircoloring') as string} />
      <CostInfo id={tablesNameIdMap.get('hairservice') as string} />
    </>
  );
};

export default Haidress;
