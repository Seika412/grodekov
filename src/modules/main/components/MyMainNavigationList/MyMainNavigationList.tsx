import type {MainListItemType} from "../../../../types/MainListItemType.ts";
import styles from "./style.module.css"
import {useGlobalStore} from "../../../../store/GlobalStore.ts";
import type {ModalTypeEnum} from "../../../../types/ModalTypeEnum.ts";
import {Fragment} from "react";
import {useNavigate} from "react-router";

type Props = {
    items: MainListItemType[];
};

export function MyMainNavigationList({items}: Props) {
  const {setShowModal, setModalType, resetModalActions} = useGlobalStore();
  const navigate = useNavigate();
  const onShowModal = (type: ModalTypeEnum) => {
    setShowModal(true);
    setModalType(type)
  };

  const onNavigationItemHandler = (item: MainListItemType) => {
    resetModalActions()
    if (item.type === "landmark") {
      navigate("/landmarks");
    } else {
      onShowModal(item.type)
    }
  }

  return <div className={styles.container}>
    {items.map((item, index) => (
      <Fragment key={item.title}>
        <button onClick={() => {
          onNavigationItemHandler(item)
        }} className={`${styles.cardWrapper} ${index === 0 && styles.cardWrapperFullRow}`}>
          <div className={styles.card}></div>
          <h3 className={styles.title}>{item.title}</h3>
        </button>
      </Fragment>
    ))}
  </div>
}