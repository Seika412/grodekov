import type {MyRouteCardItemType} from "../types/MyRouteCardItemType.ts";

export const mockRouteCards: MyRouteCardItemType[] = [
  {
    description: 'Панорама "Волочаевская битва"',
    image_path: '/images/volochaevskaya-bitva.jpg',
    url_path: '/locations/panorama-volochaevskaya-bitva',
  },
  {
    description: 'Экспозиция "Лабиринты подземелья"',
    image_path: '/images/labirinty.jpg',
    url_path: '/locations/labirinty-podzemelya',
  },
  {
    description: 'Крестьянское подворье на Амуре',
    image_path: '/images/krestyanskoe-podvore.jpg',
    url_path: '/locations/krestyanskoe-podvore',
  },
  {
    description: 'Экспозиция "Губернаторская гостиная"',
    image_path: '/images/gubernatorskaya-gostinaya.jpg',
    url_path: '/locations/gubernatorskaya-gostinaya',
  },
];