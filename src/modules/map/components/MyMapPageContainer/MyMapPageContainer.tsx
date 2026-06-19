import {MyMap} from "../MyMap/MyMap.tsx";
import {MyHeader} from "../../../header";
import {useEffect} from "react";
import {useGlobalStore} from "../../../../store/GlobalStore.ts";
import {MySubtitle} from "../../../../ui/MySubtitle/MySubtitle.tsx";
import styles from "./style.module.css"
import {MyMapModal} from "../../../map-modal";
import {MyButton} from "../../../../ui/MyButton/MyButton.tsx";
import {useNavigate} from "react-router";
import {MyRoutesList} from "../MyRoutesList/MyRoutesList.tsx";
import {mockRouteItems} from "../../../../mocks/routeItems.ts";
import {MyMapButton} from "../../ui/MyMapButton/MyMapButton.tsx";

export function MyMapPageContainer() {
  const {setShowModal, setIsShowMapModal, isShowMapModal} = useGlobalStore()
  const navigation = useNavigate()

  useEffect(() =>{
    setShowModal(false)
  }, [])

  return (
      <>
        <MyHeader />
        <main className={styles.main}>
          {!isShowMapModal && <div className={styles.mapButton}>
            <MyMapButton onClick={() => setIsShowMapModal(true)}/>
          </div>}

          <MySubtitle style={{marginInline: "16px"}} title={"Семейство бобров"} text={"Схема вашего перемещения по маршруту"} />
          <MyMap />

          <MyMapModal  >

            <MyRoutesList routes={mockRouteItems}  />
            <MyButton  onClick={() => {
              navigation("/articles/1")
            }} >
              Далее
            </MyButton>
          </MyMapModal>
        </main>
      </>
  );
};