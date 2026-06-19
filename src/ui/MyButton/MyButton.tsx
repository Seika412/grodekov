import styles from "./style.module.css"
import type {MouseEvent, ReactNode} from "react";

type Props = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
  children: ReactNode
};

export function MyButton({onClick, children}: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};