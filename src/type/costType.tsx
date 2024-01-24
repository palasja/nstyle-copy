type ServiceCostRow = {
  id: number;
  name: string;
  cost: number;
};

type ServiceCostTable = {
  id: number;
  name: string;
  services: ServiceCostRow[];
};

type ServiceCostInfo = {
  name: string;
  service: ServiceCostTable[];
};

export type { ServiceCostInfo, ServiceCostTable, ServiceCostRow };
