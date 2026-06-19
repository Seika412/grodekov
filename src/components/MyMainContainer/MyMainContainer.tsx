import styles from "./style.module.css"
import type {ReactNode} from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode,
  isShiftContentTop?: boolean,
  isResetInlinePudding?: boolean,
}

export function MyMainContainer({ children, isShiftContentTop = false, isResetInlinePudding = false }: Props) {
  return (
    <main className={clsx(
      styles.MainContainer,
      isShiftContentTop && styles.MainContainerTopShift,
      isResetInlinePudding && styles.mainContainerResetInlinePudding
    )}>
      {children}
    </main>
  );
};