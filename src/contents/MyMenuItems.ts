import type {MainListItemType} from "../types/MainListItemType.ts";
import {ModalTypeEnum} from "../types/ModalTypeEnum.ts";

export const MENU_ITEMS: MainListItemType[] = [
  {
    title: 'Ориентир',
    description: 'Проложить свой маршрут, найти интересный экспонат, локацию',
    type: ModalTypeEnum.landmark,
  },
  {
    title: 'События',
    description: 'Посетить интересное событие в музее',
    type: ModalTypeEnum.events,
  },
  {
    title: 'Контекст',
    description: 'Готовые маршруты для разных посетителей',
    type: ModalTypeEnum.context,
  },
  {
    title: 'Игра',
    description: 'Интересные игры с призами от музея',
    type: ModalTypeEnum.game,
  },
  {
    title: 'Дополнительно',
    description: 'Полезная информация для посетителей',
    type: ModalTypeEnum.additional,
  },
];