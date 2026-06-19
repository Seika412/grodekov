import styles from "./style.module.css"
import type {CSSProperties} from "react";

type Props = {
  title: string,
  text: string,
  style?: CSSProperties,
};

export function MySubtitle({title, text, style}: Props) {
  return (
    <div className={styles.subtitleContainer} style={style}>
      <h2 className={styles.subtitle}>
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
};