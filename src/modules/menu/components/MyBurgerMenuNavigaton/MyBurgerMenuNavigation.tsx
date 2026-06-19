import type {MainListItemType} from "../../../../types/MainListItemType.ts";
import styles from "./style.module.css"
import {useGlobalStore} from "../../../../store/GlobalStore.ts";
import type {ModalTypeEnum} from "../../../../types/ModalTypeEnum.ts";
import {useNavigate} from "react-router";
type Props = {
  items: MainListItemType[];
  setIsShowMenuContent: () => void
};

export function MyBurgerMenuNavigation({items, setIsShowMenuContent}: Props) {
  const {setModalType, setShowModal, resetModalActions} = useGlobalStore()
  const navigate = useNavigate();

  const onClickHandler = (type: ModalTypeEnum) => {
    resetModalActions()
    if (type === "landmark") {
      navigate("/landmarks");
      setIsShowMenuContent()
    } else {
      setShowModal(true)
      setModalType(type)
      setIsShowMenuContent()
    }
  }

  return (
    <ul className={styles.list}>
      {
        items.map(item => (
            <li className={styles.listItem} key={item.description}>
              <button className={styles.button} onClick={() => onClickHandler(item.type)}>
                {item.title}
              </button>
            </li>
        ))
      }
    </ul>
  );
}