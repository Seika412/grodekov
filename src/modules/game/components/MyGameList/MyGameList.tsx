import type {GameCardItemType} from "../../types/GameCardItemType.ts";
import styles from "./style.module.css"

type Props = {
  items: GameCardItemType[]
};

export function MyGameList({items}: Props) {
  return (
    <ul className={styles.container}>
      {items.map((item) => (
        <li className={styles.card} key={item.id}>
          <div className={styles.dateContainer}>
            <h2 className={styles.title}>{item.title}</h2>
            <div className={styles.date}>{item.date}</div>
          </div>
          <div className={styles.icon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 22V14M10 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V14M10 22H16C16.5304 22 17.0391 21.7893 17.4142 21.4142C17.7893 21.0391 18 20.5304 18 20V15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14H10M10 14V7C10 6.73478 9.89464 6.48043 9.70711 6.29289C9.51957 6.10536 9.26522 6 9 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V14M10 14H2M15 2H21C21.5523 2 22 2.44772 22 3V9C22 9.55228 21.5523 10 21 10H15C14.4477 10 14 9.55228 14 9V3C14 2.44772 14.4477 2 15 2Z" stroke="#A5A5A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </li>
      ))}
    </ul>
  );
};