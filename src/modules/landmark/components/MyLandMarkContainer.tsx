import {MyLandMarkChoiseForm} from "./MyLandMarkChoiseForm/MyLandMarkChoiseForm.tsx";
import {MyMapModal} from "../../map-modal";
import {MyMap} from "../../map/components/MyMap/MyMap.tsx";
import styles from "../../map/components/MyMapPageContainer/style.module.css";
import {MyMapButton} from "../../map/ui/MyMapButton/MyMapButton.tsx";
import {useGlobalStore} from "../../../store/GlobalStore.ts";

const filters: string[] = ["Интересные места", "Детская прогулка", "Интересные места1"]

export function MyLandMarkContainer() {
  const {isShowMapModal, setIsShowMapModal} = useGlobalStore()
  return (
    <>
      <div style={{height: "100vh"}}>
        <MyMap isFullScreen={true}/>
      </div>
      {!isShowMapModal && <div className={styles.mapButton}>
        <MyMapButton onClick={() => setIsShowMapModal(true)}/>
      </div>}
      <MyMapModal filters={filters}>
        <MyLandMarkChoiseForm/>
      </MyMapModal>
      {/*<div style={{marginTop: "25px"}}>*/}
      {/*  <MyRoutesCardListContainer title={"Популярные локации"} items={mockRouteCards} />*/}
      {/*</div>*/}
    </>
  );
};