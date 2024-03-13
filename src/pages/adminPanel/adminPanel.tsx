import { useState, useEffect, useContext } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { changeCostInfo, getAllService } from '../../../db/operations';
import { ServiceCostTable, ServiceCostInfo, ResponseCostTable } from '../../type/costType';
import { UserContext } from '../../context/UserContext';
import { Navigate } from 'react-router-dom';

const AdminPanel = () => {
  const { isAuth } = useContext(UserContext);
  const [alLServices, setAlLServices] = useState<ServiceCostInfo[]>([]);
  const [costInfo, setCostInfo] = useState<ServiceCostInfo>({
    id: '',
    name: '',
    tables: [],
  });
  useEffect(() => {
    loadAllServices();
  }, []);

  const loadAllServices = async () => {
    const response = (await getAllService()) as ResponseCostTable;
    const services = response.data as unknown as ServiceCostInfo[];
    setAlLServices(services);
    setCostInfo(services[0]);
  };

  const addNewServiceCostTable = (newServiceCostTable: ServiceCostTable): void => {
    const newTable: ServiceCostTable[] = costInfo.tables.map((t) =>
      t.id === newServiceCostTable.id ? newServiceCostTable : t
    );
    const newInfo: ServiceCostInfo = { id: costInfo.id, name: costInfo.name, tables: newTable };
    setCostInfo(newInfo);
    setAlLServices(alLServices.map((s) => (s.name === costInfo.name ? newInfo : s)));
  };

  return isAuth ? (
    <>
      <h2>ADMIN</h2>
      <select
        onChange={(ev) => {
          setCostInfo(alLServices[ev.target.selectedIndex]);
        }}
      >
        {alLServices.map((info, i) => (
          <option key={i}> {info.name ? info.name : 'Главная'}</option>
        ))}
      </select>
      <h3>{costInfo?.name}</h3>
      <button onClick={() => changeCostInfo(costInfo)}>Отправить</button>
      {costInfo?.tables.map((t, i) => (
        <ChangeCostTable key={`${i}`} table={t} saveFunction={addNewServiceCostTable} />
      ))}
    </>
  ) : (
    <Navigate to="/Auth" replace />
  );
};

const ChangeCostTable = (props: {
  table: ServiceCostTable;
  saveFunction: (newServiceCostTable: ServiceCostTable) => void;
}) => {
  const { register, handleSubmit, control, reset } = useForm<ServiceCostTable>({
    defaultValues: props.table,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'services',
  });

  useEffect(() => {
    reset(props.table);
  }, [props.table]);

  return (
    <form onSubmit={handleSubmit((data) => props.saveFunction(data))}>
      <input {...register('name')} defaultValue={props.table.name} />
      <ul>
        {fields.map((_item, index) => (
          <div key={index}>
            <input {...register(`services.${index}.name`, { required: true })} />
            <input type="number" {...register(`services.${index}.cost`)} />
            <input type="number" {...register(`services.${index}.minCost`)} />
            <input type="number" {...register(`services.${index}.maxCost`)} />
            <button type="button" onClick={() => remove(index)}>
              Удалить
            </button>
            <button
              type="button"
              onClick={() => append({ id: '', name: '', cost: 0, minCost: 0, maxCost: 0 })}
            >
              Добавить
            </button>
          </div>
        ))}
      </ul>

      <input type="submit" value="Сохранить" />
    </form>
  );
};
export default AdminPanel;
