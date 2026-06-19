import type {MyRouteCardItemType} from "../../types/MyRouteCardItemType.ts";
import {MyRouteCardItem} from "../../ui/MyRouteCardItem/MyRouteCardItem.tsx";
import styles from "./style.module.css"
type Props = {
  items: MyRouteCardItemType[]
};

export function MyRoutesCardList({items}: Props) {
  return (
    <ul className={styles.cardList}>
      {items.map(item => (
        <li key={item.id}>
          <MyRouteCardItem item={item} />
        </li>
      ))}
    </ul>
  );
}