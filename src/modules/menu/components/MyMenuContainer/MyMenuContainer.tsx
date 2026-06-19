import styles from "./style.module.css"
import {MENU_ITEMS} from "../../../../contents/MyMenuItems.ts";
import {MyBurgerMenuNavigation} from "../MyBurgerMenuNavigaton/MyBurgerMenuNavigation.tsx";

type Props = {
  isShow: boolean;
  setIsShowMenuContent: () => void
}

export function MyMenuContainer({isShow, setIsShowMenuContent}: Props) {

  return (
    isShow &&
    <div className={styles.menu}>
      <MyBurgerMenuNavigation setIsShowMenuContent={setIsShowMenuContent} items={MENU_ITEMS} />
    </div>
  );
};