import type {MyRouteCardItemType} from "../../types/MyRouteCardItemType.ts";
import styles from "./style.module.css"

type Props = {
  item: MyRouteCardItemType
};

export function MyRouteCardItem({item}: Props) {
  return (
    <a href={item.image_path} className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${item.image_path})` }}
      />

      <div className={styles.content}>
        <span className={styles.name}>
          {item.name}
        </span>
      </div>
    </a>
  );
};