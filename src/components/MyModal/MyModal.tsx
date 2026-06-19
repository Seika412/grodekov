import type {MouseEvent} from "react";
import {type ReactNode, useRef} from "react";
import styles from "./style.module.css";
import {useGlobalStore} from "../../store/GlobalStore.ts";
import {UseMyModal} from "../../hooks/UseMyModal.tsx";

type Props = {
  children: ReactNode;
};

export function MyModal({ children }: Props) {
  const { isShowModal, modalActions, deleteLastModalAction, setModalType} = useGlobalStore();
  const modalRef = useRef<HTMLDivElement>(null);

  const {
    onMouseDownHandle,
    onTouchMove,
    onTouchStart,
    onTouchEnd,
    onCloseModal,
    isDragging,
    heightVh
  } = UseMyModal();

  const onContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  if (!isShowModal) return null;

  const onBackButtonHandler = () => {
    setModalType(modalActions[modalActions.length - 1])
    deleteLastModalAction()
  }

  return (
    <div className={styles.overlay} onClick={onCloseModal}>
      <div
        ref={modalRef}
        className={`${styles.modal} ${isDragging ? styles.modalDragging : ""}`}
        style={{ height: `${heightVh}dvh` }}
        onClick={onContentClick}
      >

        <div
          className={styles.dragHandle}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDownHandle}
        >
          <div className={styles.dragIndicator} />
        </div>

        <div className={styles.header}>
          {
            !!modalActions.length && <button
            className={styles.backButton}
            onClick={onBackButtonHandler}
            aria-label="Назад"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-arrow-left-icon lucide-arrow-left">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
          </button>
          }
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}