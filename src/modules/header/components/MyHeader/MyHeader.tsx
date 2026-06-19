import {useState} from "react";
import styles from "./style.module.css";
import {MyMenuContainer} from "../../../menu";
import {UseHiddenScroll} from "../../hooks/useHiddenScroll.tsx";
import {MyAvatar} from "../../ui/MyAvatar/MyAvatar.tsx";

export function MyHeader() {
  const [isShowMenuContent, setIsShowMenuContent] = useState(false);
  UseHiddenScroll({isShowMenu: isShowMenuContent})

  const handleMenu = () => {
    setIsShowMenuContent((prevState) => !prevState);
  };

  return (
    <header className={`${styles.header} ${!isShowMenuContent && styles.headerGlass}`}>

      <div className={styles.sideAction}>
          <button onClick={handleMenu} className={`
            ${styles.btn} 
            ${styles.menuBtn} 
            ${isShowMenuContent && styles.active}
          `} aria-label="Меню">
            <span className={styles.menuIcon}></span>
          </button>
      </div>

      <MyAvatar avatarUrl={"https://avatars.mds.yandex.net/i?id=7d1effed337fff61d326eecb34eff5d6afee8453-10755803-images-thumbs&n=13"}/>
      <MyMenuContainer setIsShowMenuContent={() => setIsShowMenuContent(false)} isShow={isShowMenuContent} />
    </header>
  );
}
