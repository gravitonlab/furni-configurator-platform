export type ConfiguratorCategory =
  | 'kitchen'
  | 'wardrobe'
  | 'bathroom'
  | 'dressing'
  | 'furniture';

export type ConfiguratorStatus = 'available' | 'soon';

export interface Configurator {
  slug: string;
  title: string;
  category: ConfiguratorCategory;
  description: string;
  details: string;
  status: ConfiguratorStatus;
  path?: string;
  tags: string[];
  accent: 'olive' | 'sand' | 'graphite' | 'clay' | 'blue';
}

export const categories = [
  { slug: 'kitchen', title: 'Кухни', description: 'Планировка, фасады и материалы', count: 1, accent: 'olive' },
  { slug: 'wardrobe', title: 'Шкафы', description: 'Размеры, двери и наполнение', count: 1, accent: 'sand' },
  { slug: 'bathroom', title: 'Ванная', description: 'Тумбы и мебель для ванной', count: 0, accent: 'blue' },
  { slug: 'dressing', title: 'Гардеробные', description: 'Системы хранения под пространство', count: 0, accent: 'clay' },
  { slug: 'furniture', title: 'Мебель', description: 'Комоды, тумбы и другие предметы', count: 0, accent: 'graphite' },
] as const;

export const configurators: Configurator[] = [
  {
    slug: 'kitchen',
    title: 'Кухня',
    category: 'kitchen',
    description: 'Соберите кухню под размеры и привычки вашей семьи.',
    details: 'Планировка, модули, высота, фасады, столешница, фартук и ручки.',
    status: 'available',
    path: '/configurators/kitchen.html',
    tags: ['Г-образная', 'П-образная', 'Фасады', 'Столешница'],
    accent: 'olive',
  },
  {
    slug: 'wardrobe',
    title: 'Шкаф',
    category: 'wardrobe',
    description: 'Настройте шкаф точно под нишу и нужный объём хранения.',
    details: 'Габариты, двери, цвет, фальшпланки и варианты ручек.',
    status: 'available',
    path: '/configurators/wardrobe.html',
    tags: ['Распашной', 'Купе', 'Размеры', 'Ручки'],
    accent: 'sand',
  },
  {
    slug: 'bathroom',
    title: 'Мебель для ванной',
    category: 'bathroom',
    description: 'Продумайте компактную мебель для ванной комнаты.',
    details: 'Конфигуратор находится в разработке.',
    status: 'soon',
    tags: ['Тумба', 'Раковина', 'Хранение'],
    accent: 'blue',
  },
  {
    slug: 'dressing',
    title: 'Гардеробная',
    category: 'dressing',
    description: 'Спроектируйте систему хранения под размеры комнаты.',
    details: 'Секции, полки, штанги и ящики — скоро.',
    status: 'soon',
    tags: ['Секции', 'Полки', 'Штанги'],
    accent: 'clay',
  },
  {
    slug: 'furniture',
    title: 'Мебель',
    category: 'furniture',
    description: 'Собирайте отдельные предметы мебели из готовых модулей.',
    details: 'Комоды, тумбы, стеллажи и другие предметы — скоро.',
    status: 'soon',
    tags: ['Комоды', 'Тумбы', 'Стеллажи'],
    accent: 'graphite',
  },
];

export const getConfigurator = (slug: string) =>
  configurators.find((item) => item.slug === slug);

export const getCategory = (slug: string) =>
  categories.find((item) => item.slug === slug);
