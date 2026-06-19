import styles from "./style.module.css"
import {useGlobalStore} from "../../../../store/GlobalStore.ts";
import {type MouseEvent, type ReactNode, useRef} from "react";
import {UseMyMapModal} from "../../hooks/UseMyMapModal.tsx";
import {useNavigate} from "react-router";

interface Props  {
  children: ReactNode,
  filters?: string[]
}

export function MyMapModal({children, filters}: Props) {
  const { isShowMapModal} = useGlobalStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const navigator = useNavigate();
  const {
    onMouseDownHandle,
    onTouchMove,
    onTouchStart,
    onTouchEnd,
    onCloseModal,
    isDragging,
    heightVh
  } = UseMyMapModal();

  if (!isShowMapModal) return null;
  const onContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

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

        <div className={`${styles.header} ${filters?.length ? styles.isHasFilters : ""}`}>

          <button
            className={styles.backButton}
            onClick={() => {
              navigator(-1)
            }}
            aria-label="Назад"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-arrow-left-icon lucide-arrow-left">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
          </button>
          {
            filters ?
              <ul className={styles.filterContainer} onWheel={(e) => {
                if (e.deltaY !== 0) {
                  e.currentTarget.scrollLeft += e.deltaY;
                }
              }}>
                {filters?.map(filter => {
                  return <li key={filter} className={styles.filterItem}>{filter}</li>;
                })}
              </ul> : null
          }
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};