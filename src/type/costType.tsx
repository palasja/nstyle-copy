type ServiceCostRow = {
  id: string;
  name: string;
  cost?: number;
  minCost?: number;
  maxCost?: number;
};

type ServiceCostTable = {
  id: string;
  name: string;
  services: ServiceCostRow[];
};

type ServiceCostInfo = {
  id: string;
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

type SliderImageProps = {
  link: string;
  serviceName: string;
  img: string;
};
type ServiceImageLinkProps = {
  link: string;
  serviceName: string;
  img: string;
};
export type {
  SliderImageProps,
  ResponseCostTable,
  ServiceCostInfo,
  ServiceCostTable,
  ServiceCostRow,
  ServiceImageLinkProps,
};
