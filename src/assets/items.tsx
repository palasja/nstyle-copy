// import { ServiceCostInfo, ServiceCostTable } from 'src/type/costType';

/**
 export const Eyebrows: ServiceCostTable = {
  id: 1,
  name: 'Наращивание ресниц',
  services: [
    {
      id: 1,
      name: 'Снятие чужого наращивания',
      cost: 10,
    },
    {
      id: 2,
      name: 'Классическое наращивание',
      cost: 55,
    },
    {
      id: 3,
      name: 'Объемное наращивание 1.5 D эффект',
      cost: 57,
    },
    {
      id: 4,
      name: 'Объемное наращивание 2 D эффект',
      cost: 60,
    },
    {
      id: 5,
      name: 'Объемное наращивание 3 D эффект',
      cost: 70,
    },
    {
      id: 6,
      name: 'Снятие работы мастера',
      cost: 5,
    },
    {
      id: 7,
      name: 'Эффект"Кайли"/цветные вставки/мокрый эффек',
      cost: 5,
    },
  ],
};

export const Eyelashes: ServiceCostTable = {
  id: 1,
  name: 'Брови',
  services: [
    {
      id: 1,
      name: 'Макияж дневной',
      cost: 65,
    },
    {
      id: 2,
      name: 'Макияж вечерний',
      cost: 85,
    },
    {
      id: 3,
      name: 'Прореживание бровей',
      cost: 13,
    },
    {
      id: 4,
      name: 'Окрашивание бровей/ресниц',
      cost: 13,
    },
    {
      id: 5,
      name: 'Осветление бровей',
      cost: 15,
    },
    {
      id: 6,
      name: 'Комплекс: архитектура +коррекция +окрашивание краской',
      cost: 15,
    },
    {
      id: 7,
      name: 'Комплекс: архитектура +коррекция +окрашивание хной',
      cost: 27,
    },
    {
      id: 8,
      name: 'Комплекс: архитектура +коррекция +осветление бровей +окрашивание',
      cost: 29,
    },
    {
      id: 9,
      name: 'Окрашивание цветными пигментами в комплексе к осветлению',
      cost: 42,
    },
    {
      id: 10,
      name: 'Долговременная укладка бровей',
      cost: 30,
    },
    {
      id: 11,
      name: 'Комплекс: архитектура +окрашивание +долговременная укладка бровей',
      cost: 79,
    },
    {
      id: 12,
      name: 'Ламинирвание ресниц',
      cost: 50,
    },
    {
      id: 13,
      name: 'Ламинирвание ресниц + ботокс + окрашивание',
      cost: 60,
    },
  ],
};

const EyebrowsEyelashes: ServiceCostInfo = {
  name: '|  БРОВИ И РЕСНИЦЫ',
  service: [Eyebrows, Eyelashes],
};
 */

export const pathDictionary: { [key: string]: string } = {
  '': 'Главная',
  Blog: 'Блог',
  Contacts: 'Контакты',
  Discount: 'Акции',
  Services: 'Услуги',
  Team: 'Команда',
  Vacancies: 'Вакансии',
  Eyebrows: 'Брови | Ресницы | Макияж',
  Haidress: 'Парикхмахерские',
  Cosmetic: 'Косметические',
  Manicure: 'Ногтевой сервис',
};
