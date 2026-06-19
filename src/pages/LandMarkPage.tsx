import {MyHeader} from "../modules/header";
import {MyMainContainer} from "../components/MyMainContainer/MyMainContainer.tsx";
import {MyLandMarkContainer} from "../modules/landmark";

export function LandMarkPage() {
  return (
    <>
      <MyHeader />
      <MyMainContainer isShiftContentTop={true} isResetInlinePudding={true}>
        <MyLandMarkContainer />
      </MyMainContainer>
    </>
  );
};