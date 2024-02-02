type ServiceCostRow = {
  id: string;
  name: string;
  cost: number;
};

type ServiceCostTable = {
  id: string;
  name: string;
  services: ServiceCostRow[];
};

type ServiceCostInfo = {
  name: string;
  tables: ServiceCostTable[];
};

type ResponseCostTable = {
  data: [
    {
      data: ServiceCostInfo;
    },
  ];
};
export type { ResponseCostTable, ServiceCostInfo, ServiceCostTable, ServiceCostRow };
